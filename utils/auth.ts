"use server";
import { use } from "react";
import { supabase } from "./supabase";
type userAccount = {
  email: string;
  password: string;
  username: string;
};
export const signUpUser = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: username,
        },
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const readUserSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  return data;
};

const createRecord = async (username: string, email: string) => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .insert({ username, email })
      .select();
    console.log(data);
    console.log("error", error);
  } catch (err) {
    console.log(err);
  }
};
