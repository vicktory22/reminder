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

export type MockServerRequestOptions = {
  url?: string;
  method?: string;
  proto?: string;
  protoMinor?: string;
  protoMajor?: string;
  headers?: Record<string, string>;
  conn?: string;
  r?: string;
  w?: string;
};
