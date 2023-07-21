import ClerkJS from '@clerk/clerk-js';

export default defineNuxtPlugin(async (nuxtApp) => {
  const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string;
  const Clerk = new ClerkJS(publishableKey);
  const { user } = useUser();
  const { session } = useSession();

  async function startClerk() {
    try {
      await Clerk?.load();

      Clerk?.addListener((payload) => {
        user.value = payload.user;
        session.value = payload.session;
      });
    }
    catch (err) {
      console.error('Error starting Clerk: ', err);
    }
  }

  nuxtApp.hooks.hook('app:mounted', startClerk);

  return {
    provide: {
      clerk: Clerk,
    },
  };
});
