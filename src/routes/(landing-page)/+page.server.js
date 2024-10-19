import { supabase } from "../../lib/supabaseClient.js";

async function checkIfEmailExists(email) {
  const { data, error } = await supabase
    .from("waitlist")
    .select("email_address")
    .eq("email_address", email);

  if (error) {
    return false;
  }

  return data.length > 0;
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const fieldEmail = formData.get("email");

    try {
      const exists = await checkIfEmailExists(fieldEmail);

      if (!exists) {
        const { error } = await supabase.from("waitlist").insert([
          {
            email_address: fieldEmail,
          },
        ]);

        if (error) {
          throw error;
        }

        return { success: true };
      } else {
        throw new Error("Email exists");
      }
    } catch (error) {
      return { success: false };
    }
  },
};
