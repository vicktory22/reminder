export type ServerResponse = {
  status?: number;
  statusText?: string;
  body?: string;
};

export type ParsedRequest = {
  signature?: string;
  timestamp?: number;
  rawBody?: string;
  error?: Error;
};

export type ParsedBody = Record<string, string | number | boolean>;
