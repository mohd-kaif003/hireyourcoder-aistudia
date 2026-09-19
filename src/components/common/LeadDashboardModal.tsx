import React, { useState, useEffect } from 'react';
import { 
  X, Database, Search, Filter, RefreshCw, Download, 
  CheckCircle2, Clock, Eye, AlertCircle, Phone, Mail, MapPin, Tag
} from 'lucide-react';
import { getStoredLeads, updateLeadStatus } from '../../utils/leadsStorage';
import { LeadSubmission } from '../../types';

interface LeadDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadDashboardModal: React.FC<LeadDashboardModalProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLead, setSelectedLead] = useState<LeadSubmission | null>(null);

  const refreshData = () => {
    setLeads(getStoredLeads());
  };

  useEffect(() => {
    if (isOpen) {
      refreshData();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleUpdate = () => refreshData();
    window.addEventListener('lead_database_updated', handleUpdate);
    return () => window.removeEventListener('lead_database_updated', handleUpdate);
  }, []);

  if (!isOpen) return null;

  const filteredLeads = leads.filter(lead => {
    const matchesStatus = filterStatus === 'ALL' || lead.status === filterStatus;
    const query = searchQuery.toLowerCase();
    const matchesQuery = 
      lead.name.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      lead.service.toLowerCase().includes(query) ||
      (lead.company && lead.company.toLowerCase().includes(query));
    return matchesStatus && matchesQuery;
  });

  const handleStatusChange = (leadId: string, newStatus: LeadSubmission['status']) => {
    updateLeadStatus(leadId, newStatus);
    refreshData();
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  const exportCSV = () => {
    const headers = ['ID', 'Date', 'Name', 'Company', 'Email', 'Phone', 'Country', 'Service', 'Budget', 'Timeline', 'Status', 'Source', 'UTM Source', 'Landing Page'];
    const rows = leads.map(l => [
      l.id,
      new Date(l.createdAt).toLocaleDateString(),
      `"${l.name.replace(/"/g, '""')}"`,
      `"${(l.company || '').replace(/"/g, '""')}"`,
      l.email,
      `"${l.phone}"`,
      l.country,
      `"${l.service}"`,
      `"${l.budget}"`,
      `"${l.timeline}"`,
      l.status,
      `"${l.source}"`,
      l.utm?.utm_source || 'direct',
      l.utm?.landing_page || '/'
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `hireyourcoder_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: LeadSubmission['status']) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Contacted': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Qualified': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Proposal Sent': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Won': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Lost': return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-5xl h-[90vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="bg-slate-900 text-white p-5 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/30">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold">Agency Inbound Lead & CRM Hub</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono font-medium">
                  {leads.length} Total Leads
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Live submission tracking with UTM attribution, qualification statuses, and project scopes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportCSV}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
              title="Export to CSV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter / Search Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, email, company or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {['ALL', 'New', 'Contacted', 'Qualified', 'Proposal Sent', 'Won', 'Lost'].map(st => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  filterStatus === st 
                    ? 'bg-slate-900 text-white shadow-sm' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area: Split View (Table + Detail Drawer) */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          
          {/* Table List */}
          <div className={`flex-1 overflow-y-auto ${selectedLead ? 'hidden md:block md:w-1/2 border-r border-slate-200' : 'w-full'}`}>
            {filteredLeads.length === 0 ? (
              <div className="p-12 text-center text-slate-500 text-sm">
                No leads found matching your search and filter criteria.
              </div>
            ) : (
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-100/75 text-slate-500 sticky top-0 uppercase tracking-wider font-bold">
                  <tr>
                    <th className="p-3 pl-4">Lead</th>
                    <th className="p-3">Service & Budget</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Source</th>
                    <th className="p-3 pr-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredLeads.map(lead => (
                    <tr 
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className={`hover:bg-blue-50/50 cursor-pointer transition-colors ${
                        selectedLead?.id === lead.id ? 'bg-blue-50/80 font-medium' : ''
                      }`}
                    >
                      <td className="p-3 pl-4">
                        <div className="font-bold text-slate-900">{lead.name}</div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1">
                          <span>{lead.email}</span>
                          {lead.company && <span className="text-slate-400">• {lead.company}</span>}
                        </div>
                      </td>

                      <td className="p-3">
                        <div className="font-semibold text-slate-800">{lead.service}</div>
                        <div className="text-[11px] text-slate-500">{lead.budget}</div>
                      </td>

                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadge(lead.status)}`}>
                          {lead.status}
                        </span>
                      </td>

                      <td className="p-3 text-[11px] text-slate-500">
                        <div>{lead.source}</div>
                        <div className="text-[10px] font-mono text-slate-400">
                          {lead.utm?.utm_source || 'direct'}
                        </div>
                      </td>

                      <td className="p-3 pr-4 text-right">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLead(lead);
                          }}
                          className="px-2 py-1 rounded-lg text-blue-600 hover:bg-blue-100 font-semibold text-xs"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Lead Detail Panel */}
          {selectedLead && (
            <div className="flex-1 md:w-1/2 p-6 bg-white overflow-y-auto flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-slate-900">{selectedLead.name}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadge(selectedLead.status)}`}>
                        {selectedLead.status}
                      </span>
                    </div>
                    {selectedLead.company && (
                      <div className="text-xs font-semibold text-slate-600">{selectedLead.company}</div>
                    )}
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Submitted on {new Date(selectedLead.createdAt).toLocaleString()}
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedLead(null)}
                    className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 md:hidden"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedLead.name)},%20this%20is%20HireYourCoder%20following%20up%20on%20your%20project%20inquiry.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-emerald-200 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`mailto:${selectedLead.email}?subject=HireYourCoder%20-%20Technical%20Consultation`}
                    className="px-3 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-blue-200 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>Email Lead</span>
                  </a>
                </div>

                {/* Scope & Budget Details */}
                <div className="grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">Service</span>
                    <span className="font-semibold text-slate-800">{selectedLead.service}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">Budget Range</span>
                    <span className="font-semibold text-slate-800">{selectedLead.budget}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">Target Timeline</span>
                    <span className="font-semibold text-slate-800">{selectedLead.timeline}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">Country / Region</span>
                    <span className="font-semibold text-slate-800">{selectedLead.country}</span>
                  </div>
                </div>

                {/* Message / Brief */}
                <div>
                  <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">Project Scope / Message</h5>
                  <div className="p-3.5 bg-slate-50 rounded-xl text-xs text-slate-700 leading-relaxed border border-slate-100">
                    {selectedLead.message}
                  </div>
                </div>

                {/* Status Update Control */}
                <div>
                  <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">Update Qualification Status</h5>
                  <div className="grid grid-cols-3 gap-2">
                    {(['New', 'Contacted', 'Qualified', 'Proposal Sent', 'Won', 'Lost'] as LeadSubmission['status'][]).map(statusOpt => (
                      <button
                        key={statusOpt}
                        onClick={() => handleStatusChange(selectedLead.id, statusOpt)}
                        className={`py-1.5 px-2 rounded-lg text-xs font-bold border transition-all ${
                          selectedLead.status === statusOpt
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {statusOpt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* UTM & Attribution Telemetry */}
                <div className="border-t border-slate-100 pt-3">
                  <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Attribution & UTM Data</span>
                  </h5>
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div><span className="text-slate-400 font-sans">Source:</span> {selectedLead.source}</div>
                    <div><span className="text-slate-400 font-sans">utm_source:</span> {selectedLead.utm?.utm_source || 'N/A'}</div>
                    <div><span className="text-slate-400 font-sans">utm_campaign:</span> {selectedLead.utm?.utm_campaign || 'N/A'}</div>
                    <div><span className="text-slate-400 font-sans">Landing Page:</span> {selectedLead.utm?.landing_page || 'N/A'}</div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
