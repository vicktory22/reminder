export type ServerResponse = {
  status?: number;
  statusText?: string;
  body?: string;
};

export type ParsedRequest = {
  signature?: string;
  timestamp?: string;
  rawBody?: string;
  error?: Error;
};

export type ParsedBody = Record<string, string | number | boolean>;
