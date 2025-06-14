import React, { useState } from "react";
import FreeRewardCard from "./FreeRewardCard";
import SectionTabs from "@/components/ui/SectionTabs";
import NoticeCard from "@/components/ui/NoticeCard";
import { motion, AnimatePresence } from "framer-motion";

const INVITE_REWARDS = [
  {
    title: "Invite Tier 1",
    ram: "8GB",
    cpu: "2 cores",
    storage: "64GB",
    requirement: "3x invites"
  },
  {
    title: "Invite Tier 2",
    ram: "16GB",
    cpu: "4 cores",
    storage: "128GB",
    requirement: "6x invites"
  },
  {
    title: "Invite Tier 3",
    ram: "24GB",
    cpu: "6 cores",
    storage: "150GB",
    requirement: "9x invites"
  },
  {
    title: "Invite Tier 4",
    ram: "32GB",
    cpu: "8 cores",
    storage: "198GB",
    requirement: "12x invites"
  },
  {
    title: "Invite Tier 5",
    ram: "48GB",
    cpu: "12 cores",
    storage: "220GB",
    requirement: "16x invites"
  },
  {
    title: "Invite Tier 6",
    ram: "64GB",
    cpu: "16 cores",
    storage: "245GB",
    requirement: "24x invites"
  },
  {
    title: "Invite Tier 7",
    ram: "96GB",
    cpu: "18 cores",
    storage: "350GB",
    requirement: "35x invites"
  }
];

const BOOST_REWARDS = [
  {
    title: "Boost Tier 1",
    ram: "32GB",
    cpu: "8 cores",
    storage: "196GB",
    requirement: "2x Boost"
  },
  {
    title: "Boost Tier 2",
    ram: "48GB",
    cpu: "12 cores",
    storage: "256GB",
    requirement: "4x Boost"
  },
  {
    title: "Boost Tier 3",
    ram: "64GB",
    cpu: "24 cores",
    storage: "384GB",
    requirement: "6x Boost"
  }
];

const FreeRewardsSection = () => {
  const [activeSection, setActiveSection] = useState<'invite' | 'boost' | 'both'>('both');

  const inviteNotices = [
    { type: 'error' as const, text: 'No IPv4 included' },
    { type: 'success' as const, text: 'Rewards can be stacked for more resources' },
    { type: 'info' as const, text: 'VoidNodes reserves right to revoke if terms are violated' }
  ];

  const boostNotices = [
    { type: 'error' as const, text: 'No IPv4 included' },
    { type: 'success' as const, text: 'Alternative accounts allowed for boosting' },
    { type: 'success' as const, text: 'Lifetime VPS access even after boost expires' },
    { type: 'info' as const, text: 'Subject to revocation if abused' }
  ];

  return (
    <div className="relative z-10 space-y-12 pb-20">
      <SectionTabs 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          {/* Invite Rewards Section */}
          {(activeSection === 'invite' || activeSection === 'both') && (
            <motion.div
              key="invite"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-white mb-8 text-center font-chakra-petch"
              >
                Invite Rewards Program
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {INVITE_REWARDS.map((reward, index) => (
                  <FreeRewardCard
                    key={reward.title}
                    title={reward.title}
                    ram={reward.ram}
                    cpu={reward.cpu}
                    storage={reward.storage}
                    requirement={reward.requirement}
                    index={index}
                  />
                ))}
              </div>
              
              <NoticeCard title="Invite Program Terms" items={inviteNotices} />
            </motion.div>
          )}
          
          {/* Boost Rewards Section */}
          {(activeSection === 'boost' || activeSection === 'both') && (
            <motion.div
              key="boost"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: activeSection === 'both' ? 0.3 : 0 }}
              className="mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-white mb-8 text-center font-chakra-petch"
              >
                Discord Boost Rewards
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {BOOST_REWARDS.map((reward, index) => (
                  <FreeRewardCard
                    key={reward.title}
                    title={reward.title}
                    ram={reward.ram}
                    cpu={reward.cpu}
                    storage={reward.storage}
                    requirement={reward.requirement}
                    index={index}
                  />
                ))}
              </div>
              
              <NoticeCard title="Boost Program Terms" items={boostNotices} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FreeRewardsSection;
