import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Rent</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="car" md="directions_car" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="trips">
        <NativeTabs.Trigger.Icon sf="gear" md="trip" />
        <NativeTabs.Trigger.Label>Trips</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="ride">
        <NativeTabs.Trigger.Icon sf="car.circle" md="person_3" />
        <NativeTabs.Trigger.Label>Ride</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="share">
        <NativeTabs.Trigger.Label>Share</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="car" md="share" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="subscribe">
        <NativeTabs.Trigger.Label>Subscribe</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="car" md="subscriptions" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
