import axios, { type AxiosResponse } from "axios";
import type { Note, NoteTag } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api";
const TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN as string;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNotePayload {
  title: string;
  content: string;
  tag: NoteTag;
}

export const fetchNotes = async (
  params: FetchNotesParams,
): Promise<FetchNotesResponse> => {
  const { page, perPage, search } = params;

  const response: AxiosResponse<FetchNotesResponse> = await api.get(
    "/notes",
    {
      params: {
        page,
        perPage,
        ...(search ? { search } : {}),
      },
    },
  );

  return response.data;
};

export const createNote = async (
  payload: CreateNotePayload,
): Promise<Note> => {
  const response: AxiosResponse<Note> = await api.post("/notes", payload);
  return response.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const response: AxiosResponse<Note> = await api.delete(`/notes/${noteId}`);
  return response.data;
};
