import { create } from 'zustand';

export const useModalStore = create((set) => ({
  isCarModalOpen: false,
  openCarModal: () => set({ isCarModalOpen: true }),
  closeCarModal: () => set({ isCarModalOpen: false }),
}));

export const usePickupSelectionModal = create((set) => ({
  isPickupLocationModalOpen: false,
  openPickupLocationModal: () => set({ isPickupLocationModalOpen: true }),
  closePickupLocationModal: () => set({ isPickupLocationModalOpen: false }),
}));


export const useDateSelectionModal = create((set) => ({
  isDateSelectionModalOpen: false,
  openDateSelectionModal: () => set({ isDateSelectionModalOpen: true }),
  closeDateSelectionModal: () => set({ isDateSelectionModalOpen: false }),
}));


export const useSelectedLocationState = create((set) => ({
  SelectedLocationState: 'Al Quoz',
  setSelectedLocation: (newLocation: string) => set({ SelectedLocationState: newLocation }),
}));

interface DateAndTimeState {
  SelectedStartDateState: Date;
  SelectedEndDateState: Date;
  SelectedStartTimeState: string;
  SelectedEndTimeState: string;

  setSelectedStartDateState: (date: Date) => void;
  setSelectedEndDateState: (date: Date) => void;
  setSelectedStartTimeState: (time: string) => void;
  setSelectedEndTimeState: (time: string) => void;

  setSelectedRange: (range: { startDate?: Date; endDate?: Date; startTime?: string; endTime?: string }) => void;
}

export const useSelectedDateAndTimeState = create<DateAndTimeState>((set) => ({
  SelectedStartDateState: new Date(),
  SelectedEndDateState: new Date(),
  SelectedStartTimeState: "10:00 AM",
  SelectedEndTimeState: "10:00 AM",

  setSelectedStartDateState: (date) => set({ SelectedStartDateState: date }),
  setSelectedEndDateState: (date) => set({ SelectedEndDateState: date }),
  setSelectedStartTimeState: (time) => set({ SelectedStartTimeState: time }),
  setSelectedEndTimeState: (time) => set({ SelectedEndTimeState: time }),

  setSelectedRange: (range) => set((state) => ({
      SelectedStartDateState: range.startDate ?? state.SelectedStartDateState,
      SelectedEndDateState: range.endDate ?? state.SelectedEndDateState,
      SelectedStartTimeState: range.startTime ?? state.SelectedStartTimeState,
      SelectedEndTimeState: range.endTime ?? state.SelectedEndTimeState,
    })),
}));