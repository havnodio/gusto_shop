import React from 'react';
import { Profile } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Calendar, Globe, Languages, Mail } from 'lucide-react';

interface PersonalInformationProps {
  profile: Profile;
  email?: string;
}

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; value: string | null | undefined }> = ({ icon, title, value }) => (
  <Card className="bg-gray-50 dark:bg-gray-800/50">
    <CardContent className="p-4 flex items-center">
      <div className="mr-4 text-muted-foreground">{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="font-medium">{value || 'Not set'}</p>
      </div>
    </CardContent>
  </Card>
);

const PersonalInformation: React.FC<PersonalInformationProps> = ({ profile, email }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Personal information</h2>
      <p className="text-muted-foreground mb-6">
        Manage your personal information, including phone numbers and email address where you can be contacted.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard 
          icon={<User size={20} />} 
          title="Name" 
          value={`${profile.first_name || ''} ${profile.last_name || ''}`.trim()} 
        />
        <InfoCard 
          icon={<Calendar size={20} />} 
          title="Date of Birth" 
          value={profile.date_of_birth ? new Date(profile.date_of_birth).toLocaleDateString() : null} 
        />
        <InfoCard 
          icon={<Globe size={20} />} 
          title="Country/Region" 
          value={profile.country} 
        />
        <InfoCard 
          icon={<Languages size={20} />} 
          title="Language" 
          value={profile.language} 
        />
        <InfoCard 
          icon={<Mail size={20} />} 
          title="Contactable at" 
          value={email} 
        />
      </div>
    </div>
  );
};

export default PersonalInformation;