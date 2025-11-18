
import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import MotorList from './components/MotorList';
import RentalList from './components/RentalList';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handlePageChange = useCallback((page: Page) => {
    setCurrentPage(page);
    if (window.innerWidth < 768) {
        setSidebarOpen(false);
    }
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'motors':
        return <MotorList />;
      case 'rentals':
        return <RentalList />;
      case 'maintenance':
        return <div className="p-6"><h1 className="text-2xl font-bold">Maintenance</h1><p>Module under construction.</p></div>;
      case 'customers':
        return <div className="p-6"><h1 className="text-2xl font-bold">Customer Management</h1><p>Module under construction.</p></div>;
      case 'accounting':
        return <div className="p-6"><h1 className="text-2xl font-bold">Accounting</h1><p>Module under construction.</p></div>;
      default:
        return <Dashboard />;
    }
  };
  
  const pageTitles: Record<Page, string> = {
    dashboard: "Dashboard",
    motors: "Motor Fleet Management",
    rentals: "Rental Transactions",
    maintenance: "Maintenance",
    customers: "Customers",
    accounting: "Accounting"
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar currentPage={currentPage} onPageChange={handlePageChange} isOpen={isSidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={pageTitles[currentPage]} onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;