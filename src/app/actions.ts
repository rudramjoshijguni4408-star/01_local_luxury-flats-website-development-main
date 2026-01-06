"use server";

import { createClient } from "@supabase/supabase-js";

export async function submitInquiry(formData: {
  name: string;
  phone: string;
  email: string;
  type?: string;
  budget?: string;
  timeline?: string;
  project?: string;
  message?: string;
}) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const { data, error } = await supabase
      .from("inquiries")
      .insert([formData])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Submission error:", err);
    return { success: false, error: "Failed to submit inquiry" };
  }
}
