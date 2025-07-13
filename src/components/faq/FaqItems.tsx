"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { FAQ } from "./Faq.types";

type FAQItemProps = {
  readonly faq: FAQ;
  readonly expanded: boolean;
  readonly onToggle: () => void;
};

export function FaqItem({ faq, expanded, onToggle }: FAQItemProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-4 sm:px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900 text-sm sm:text-base">
            {faq.question}
          </span>
          {faq.popular && (
            <Badge className="bg-yellow-100 text-yellow-800 text-xs">
              Popular
            </Badge>
          )}
        </div>
        {expanded ? (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        )}
      </button>
      {expanded && (
        <div className="px-4 sm:px-6 pb-4 text-sm sm:text-base">
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      )}
    </Card>
  );
}
