import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import Image from 'next/image';

interface CaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  case: {
    title: string;
    image: string;
    imageAlt: string;
    description: string;
    link: string;
  };
}

export function CaseModal({ isOpen, onClose, case: caseData }: CaseModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-3xl w-full bg-white rounded-xl shadow-2xl">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full"
            >
              <X size={20} />
            </button>
            
            <div className="relative h-[400px] w-full">
              <Image
                src={caseData.image}
                alt={caseData.imageAlt}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            
            <div className="p-6">
              <Dialog.Title className="text-2xl font-bold text-gray-900 mb-4">
                {caseData.title}
              </Dialog.Title>
              
              <Dialog.Description className="text-gray-600 mb-6">
                {caseData.description}
              </Dialog.Description>
              
              <a
                href={caseData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                查看详情
              </a>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
} 