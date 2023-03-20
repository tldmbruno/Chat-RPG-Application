import { connectToMongoDB } from '@config';
import { ChatFeedMessages } from '@models';
import { Err, ErrorWithStatus } from '@utils';

export async function getChatFeedMessagesByChatId(param: string) {
  try {
    await connectToMongoDB();

    const chatMessage = await ChatFeedMessages.find({ chatRoomId: param });

    return {
      message: 'Chat Feed(s) selecionado(s) com sucesso!',
      data: {
        chatMessage,
      },
    };
  } catch (error: unknown) {
    let err: Err;
    if (error instanceof ErrorWithStatus) {
      err = { errorStatus: error.getStatus(), errorMessage: error.message };
    }
    return {
      error: err.errorStatus ?? 500,
      message: err.errorMessage ?? 'Erro ao selecionar Chat Feed Messages',
    };
  }
}
