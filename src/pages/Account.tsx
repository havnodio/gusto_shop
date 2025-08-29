import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, ShoppingBag, CreditCard, Gift } from 'lucide-react';
import PersonalInformation from '@/components/account/PersonalInformation';
import OrderHistory from '@/components/account/OrderHistory';

type ActiveTab = 'personal' | 'billing' | 'orders' | 'giftcards';

const AccountPage = () => {
  const { user, profile, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<ActiveTab>('personal');

  if (!user || !profile) {
    return <div>Loading...</div>;
  }

  const getInitials = () => {
    const firstName = profile.first_name || '';
    const lastName = profile.last_name || '';
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return <PersonalInformation profile={profile} email={user.email} />;
      case 'orders':
        return <OrderHistory />;
      case 'billing':
        return <div className="text-center p-8"><h2 className="text-2xl font-bold">Billing & Payments</h2><p>This feature is coming soon.</p></div>;
      case 'giftcards':
        return <div className="text-center p-8"><h2 className="text-2xl font-bold">Gift Cards</h2><p>This feature is coming soon.</p></div>;
      default:
        return <PersonalInformation profile={profile} email={user.email} />;
    }
  };

  const NavItem: React.FC<{ tab: ActiveTab; icon: React.ReactNode; label: string }> = ({ tab, icon, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
        activeTab === tab
          ? 'bg-primary/10 text-primary dark:bg-primary/20'
          : 'text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
    >
      {icon}
      {label}
    </button>
  );

  return (
    <div className="container mx-auto max-w-6xl py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Account</h1>
        <Button onClick={signOut} variant="outline">Sign Out</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <aside className="md:col-span-1">
          <div className="flex flex-col items-center text-center p-4 border rounded-lg">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src={profile.avatar_url} alt="User avatar" />
              <AvatarFallback>{getInitials()}</AvatarFallback>
            </Avatar>
            <h2 className="font-bold text-xl">{`${profile.first_name || ''} ${profile.last_name || ''}`.trim()}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <nav className="mt-6 space-y-1">
            <NavItem tab="personal" icon={<User className="mr-3 h-5 w-5" />} label="Personal information" />
            <NavItem tab="billing" icon={<CreditCard className="mr-3 h-5 w-5" />} label="Billing & Payments" />
            <NavItem tab="orders" icon={<ShoppingBag className="mr-3 h-5 w-5" />} label="Order History" />
            <NavItem tab="giftcards" icon={<Gift className="mr-3 h-5 w-5" />} label="Gift Cards" />
          </nav>
        </aside>

        {/* Right Content */}
        <main className="md:col-span-3">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AccountPage;