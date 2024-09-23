<template>
  <main class="flex flex-col justify-center min-h-screen items-center py-12">
    <div class="space-y-8 flex flex-col items-center px-4">
      <div class="bg-white rounded-xl shadow-xs border border-gray-300/90 min-h-96 w-full p-6 flex flex-col gap-2">
        <h1 class="text-xl">Sign in</h1>
        <p class="text-gray-500/90 max-w-sm">
          And transform the way you write.
        </p>
        <form @submit.prevent="handleLogin">
          <div class="flex flex-col gap-4 mt-6">
            <AppInput v-model="email" placeholder="john.doe@gmail.com" type="email" />
            <AppInput v-model="password" placeholder="**********" type="password" />
            <AppButton type="submit">Log In</AppButton>
          </div>
        </form>
        <div class="text-center h-4 mt-6 border-t border-gray-300/70">
          <p class="text-xs font-medium bg-white text-center relative -top-[17px] p-2 inline-block text-gray-700/80">
            Or authorize with
          </p>
        </div>
        <div class="flex items-center w-full justify-center gap-4">
          <AppButton lead-icon="google" lead-icon-class="text-gray-500/90 !w-3.5 !h-3.5" class="w-full" secondary>
            Google
          </AppButton>
          <AppButton lead-icon="github" lead-icon-class="text-gray-500/90 !w-3.5 !h-3.5" class="w-full" secondary>
            GitHub
          </AppButton>
        </div>
        <NuxtLink to="/forgot-password" class="text-sm mt-6">Forgot password?</NuxtLink>
        <p class="text-sm text-gray-500/90">
          Don't have an account?
          <NuxtLink to="/signup" class="font-medium text-black">Sign up</NuxtLink>
        </p>
      </div>
    </div>
    <AppAlert v-if="alert.show" type="error" :title="alert.title" :description="alert.description" />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "spacious",
  middleware: 'auth'
});

const { auth } = useSupabaseClient();

const email = ref("");
const password = ref("");
const alert = ref({ show: false, type: 'error', title: '', description: '' });

const router = useRouter();

const handleLogin = async () => {
  try {
    const { error } = await auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    router.push('/home');
  } catch (error) {
    alert.value = { show: true, type: 'error', title: 'Login Failed', description: 'Invalid email or password.' };
  }
};
</script>