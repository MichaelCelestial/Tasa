export async function submitForm(formData: any) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/request" || "/api/request",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    return await response.json();
  } catch (error) {
    console.log(new Error(`Server error: ${error}`));
  }
}
