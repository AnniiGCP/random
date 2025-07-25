import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PointsCalculatorProps {
  onProfileScanned: () => void;
}

export function PointsCalculator({ onProfileScanned }: PointsCalculatorProps) {
  const [profileUrl, setProfileUrl] = useState('');
  const [points, setPoints] = useState<number | null>(null);
  const [calculatingPoints, setCalculatingPoints] = useState(false);
  const [savedProfiles, setSavedProfiles] = useState<string[]>([]);

  const calculatePoints = () => {
    if (!profileUrl.trim()) return;

    setCalculatingPoints(true);

    // Simulating API call with timeout
    setTimeout(() => {
      // Generate a random score between 70 and 100 for demo purposes
      const calculatedPoints = Math.floor(Math.random() * 31) + 70;
      setPoints(calculatedPoints);

      // Save profile if not already saved
      if (!savedProfiles.includes(profileUrl)) {
        setSavedProfiles([...savedProfiles, profileUrl]);
      }

      onProfileScanned();

      setCalculatingPoints(false);
    }, 1500);
  };

  return (
    <div className="py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Your Ultimate <span className="text-gradient">Google Cloud Arcade</span> Companion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track your progress, analyze your achievements, and stay ahead in the Arcade with ArcadeVerse.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="google-card overflow-hidden">
            <CardHeader className="google-gradient">
              <CardTitle className="text-xl text-gray-800 dark:text-white">Calculate Your Arcade Points</CardTitle>
              <CardDescription className="text-gray-700 dark:text-white/80">
                Enter your Google Cloud SkillBoost profile URL to calculate your Arcade Points instantly!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="profile-url" className="text-sm font-medium">
                    Enter your SkillBoost profile URL:
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id="profile-url"
                      placeholder="https://www.cloudskillsboost.google/public_profiles/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                      value={profileUrl}
                      onChange={(e) => setProfileUrl(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      onClick={calculatePoints}
                      disabled={calculatingPoints || !profileUrl.trim()}
                      // Temporarily removed google-button to debug hydration
                      className="bg-blue-700 dark:bg-primary text-white hover:bg-blue-800 dark:hover:bg-primary/90 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {calculatingPoints ? "Calculating..." : "Calculate"}
                    </Button>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-xs text-muted-foreground mt-1"
                  >
                    <span className="text-green-600 dark:text-green-500">✓</span> No need to enter your profile URL again! Your accounts are saved, so you can switch between multiple profiles effortlessly.
                  </motion.p>
                </div>

                {points !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 bg-accent/10 p-6 rounded-lg text-center"
                  >
                    <div className="text-sm text-muted-foreground mb-2">Your calculated Arcade Points</div>
                    <div className="text-4xl font-bold text-primary">{points}</div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${points}%` }}
                      transition={{ delay: 0.3, duration: 1 }}
                      className="mt-2 bg-primary/20 h-2 rounded-full overflow-hidden w-full"
                    >
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: `${points}%` }}
                      />
                    </motion.div>

                    <div className="mt-4 flex justify-center gap-2">
                      {points >= 90 ? (
                        <Badge className="bg-google-green">Excellent</Badge>
                      ) : points >= 80 ? (
                        <Badge className="bg-google-blue">Great</Badge>
                      ) : (
                        <Badge className="bg-google-yellow">Good</Badge>
                      )}

                      <Badge variant="outline">
                        Rank: {points >= 90 ? 'Top 10%' : points >= 80 ? 'Top 25%' : 'Top 50%'}
                      </Badge>
                    </div>
                  </motion.div>
                )}

                {savedProfiles.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-medium mb-2">Saved Profiles:</h3>
                    <div className="flex flex-wrap gap-2">
                      {savedProfiles.map((profile) => (
                        <Button
                          key={profile}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => {
                            setProfileUrl(profile);
                            setCalculatingPoints(true);
                            setTimeout(() => {
                              const calculatedPoints = Math.floor(Math.random() * 31) + 70;
                              setPoints(calculatedPoints);
                              setCalculatingPoints(false);
                            }, 1000);
                          }}
                        >
                          Profile {savedProfiles.indexOf(profile) + 1}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 px-6 py-4 text-xs text-muted-foreground">
              Your data is private and secure. We don't store your profile information.
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
