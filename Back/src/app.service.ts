import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';

interface RequestData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

@Injectable()
export class AppService {
  private bot: TelegramBot;
  private chatId: string;

  constructor() {
    this.bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN!);
    this.chatId = process.env.TELEGRAM_CHAT_ID!;
  }

  async sendToTelegram(
    requestData: RequestData,
  ): Promise<{ success: boolean; message: string }> {
    try {
      const { name, email, phone, message } = requestData;

      const telegramMessage = `
📋 <b>Новая заявка!</b>

👤 <b>Имя:</b> ${name}
📧 <b>Email:</b> ${email}
📱 <b>Телефон:</b> ${phone || 'Не указан'}

💬 <b>Сообщение:</b>
${message}
      `.trim();

      await this.bot.sendMessage(this.chatId, telegramMessage, {
        parse_mode: 'HTML',
      });

      return {
        success: true,
        message: 'Заявка успешно отправлена в Telegram',
      };
    } catch (error) {
      console.error('Ошибка при отправке в Telegram:', error);
      return {
        success: false,
        message: 'Ошибка при отправке заявки',
      };
    }
  }
}
