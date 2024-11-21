import { CheckCircle } from 'lucide-react';

     interface VerifiedBadgeProps {
       isVerified: boolean;
     }

     const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ isVerified }) => {
       return isVerified ? (
         <div className="ml-2 inline-flex items-center text-blue-500">
           <CheckCircle size={16} />
           <span className="ml-1 text-sm font-medium">Verified</span>
         </div>
       ) : null;
     };

     export default VerifiedBadge;