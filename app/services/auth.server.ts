type RegisterPayload = {
  email: string;
  username: string;
  password: string;
};

export async function registerUser(payload: RegisterPayload) {
  return { email: payload.email, username: payload.username, id: 1 };
}
