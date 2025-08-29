import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Account = () => {
  const { user, profile, signOut } = useAuth();

  if (!user || !profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center py-12">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>My Account</CardTitle>
          <CardDescription>Manage your account details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>First Name:</strong> {profile.first_name || 'Not set'}</p>
          <p><strong>Last Name:</strong> {profile.last_name || 'Not set'}</p>
          <p><strong>Role:</strong> <span className="capitalize">{profile.role}</span></p>
          <Button onClick={signOut} variant="destructive">Sign Out</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Account;