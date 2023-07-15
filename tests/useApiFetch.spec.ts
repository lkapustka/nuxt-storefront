import { describe, beforeEach, afterEach, vi, it, expect } from 'vitest';
import { useApiFetch } from 'composables/useApiFetch';

describe('useApiFetch', () => {
  const mockUseRuntimeConfig = vi.fn(() => ({
    public: {
      apiBaseURL: 'https://api.example.com',
    },
  }));

  beforeEach(() => {
    vi.restoreAllMocks();
    vi.stubGlobal('useRuntimeConfig', mockUseRuntimeConfig);
    vi.stubGlobal('useFetch', vi.fn());
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should use useRuntimeConfig', () => {
    const path = '/data';

    useApiFetch(path);

    expect(useRuntimeConfig).toHaveBeenCalledTimes(1);
  });

  it('should set correct base URL in options', () => {
    const path = '/data';

    useApiFetch(path);

    expect(useFetch).toHaveBeenCalledWith('/data', {
      key: path,
      baseURL: 'https://api.example.com',
    });
  });

  it('should set correct key in options', () => {
    const path = '/data';

    useApiFetch(path);

    expect(useFetch).toHaveBeenCalledWith('/data', {
      key: path,
      baseURL: 'https://api.example.com',
    });
  });

  it('should call useFetch with correct path and options', () => {
    const path = '/data';
    const options = {
      lazy: true,
    };

    useApiFetch(path, options);

    expect(useFetch).toHaveBeenCalledWith(path, {
      ...options,
      key: path,
      baseURL: 'https://api.example.com',
    });
  });
});
