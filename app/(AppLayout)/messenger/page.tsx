import { DialogCard } from "@/shared/components/dialog-card";
import React from "react";

function MessengerPage() {
  return (
    <div className="max-w-[1080px] w-full mx-auto">
      <div className="flex w-full border border-border my-10 min-h-[700px]">
        <div className="w-full max-w-96 border-r border-border pb-4">
          <div className="flex items-center justify-around h-16 border-b border-border">
            <span className="text-lg font-semibold">shirleymero</span>
            <img src="new-dialog.svg" alt="new-dialog" />
          </div>
          <DialogCard
            avatar="/profile-s.png"
            username="shirleyromero"
            text="Imperdiet in sit rhoncus, eleifend tellu..."
          />
          <DialogCard
            avatar="/profile-s.png"
            username="shirleyromero"
            text="Imperdiet in sit rhoncus, eleifend tellu..."
          />
          <DialogCard
            avatar="/profile-s.png"
            username="shirleyromero"
            text="Imperdiet in sit rhoncus, eleifend tellu..."
          />
          <DialogCard
            avatar="/profile-s.png"
            username="shirleyromero"
            text="Imperdiet in sit rhoncus, eleifend tellu..."
          />
          <DialogCard
            avatar="/profile-s.png"
            username="shirleyromero"
            text="Imperdiet in sit rhoncus, eleifend tellu..."
          />
          <DialogCard
            avatar="/profile-s.png"
            username="shirleyromero"
            text="Imperdiet in sit rhoncus, eleifend tellu..."
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MessengerPage;
