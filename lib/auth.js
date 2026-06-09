export const APP_DEEP_LINK = 'costmydish://';

export async function establishSessionFromUrl(supabase) {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    return { session: data.session, error };
  }

  const { data, error } = await supabase.auth.getSession();
  if (data.session || error) {
    return { session: data.session, error };
  }

  return waitForSession(supabase);
}

function waitForSession(supabase) {
  return new Promise((resolve) => {
    const timeout = setTimeout(async () => {
      subscription.unsubscribe();
      const { data, error } = await supabase.auth.getSession();
      resolve({ session: data.session, error });
    }, 2000);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        clearTimeout(timeout);
        subscription.unsubscribe();
        resolve({ session, error: null });
      }
    });
  });
}
