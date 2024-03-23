import OpenAI from "openai"

class ApiHandler {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true });
  }

  async promptChatModel(prompt: string): Promise<string> {

    return new Promise((resolve, reject) => {
      const response = this.client.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [{ role: "user", content: prompt }],
      });
      response.then((response: any) => {
        resolve(response.choices[0].message.content);
      }).catch((error: any) => {
        reject(error);
      });
    });
  }
}

export default ApiHandler;