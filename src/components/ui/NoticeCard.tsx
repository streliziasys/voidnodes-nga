
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Info } from "lucide-react";

interface NoticeItem {
  type: 'success' | 'error' | 'info';
  text: string;
}

interface NoticeCardProps {
  title: string;
  items: NoticeItem[];
}

const NoticeCard = ({ title, items }: NoticeCardProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={16} className="text-emerald-400" />;
      case 'error':
        return <XCircle size={16} className="text-red-400" />;
      case 'info':
        return <Info size={16} className="text-blue-400" />;
      default:
        return <Info size={16} className="text-blue-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="glass-card rounded-xl p-6 border border-void-accent/10 bg-gradient-to-br from-void-dark-gray/30 to-void-dark-gray/10"
    >
      <h4 className="font-semibold mb-4 text-white text-lg flex items-center gap-2">
        <Info size={18} className="text-void-accent" />
        {title}
      </h4>
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start gap-3 text-gray-300"
          >
            {getIcon(item.type)}
            <span className="text-sm leading-relaxed">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NoticeCard;
