module.exports = {
  name: 'types-api.ts',
  httpClientType: 'axios',
  singleHttpClient: true,
  generateClient: true,
  cleanOutput: true,
  modular: true,
  extractEnums: true,
  extractRequestParams: true,
  extractRequestBody: true,
  extractResponseBody: true,
  enumNamesAsValues: true,
  rewrite: true,
  // debug: true,
  codeGenConstructs: (struct) => {
    return {
      ...struct,

      Keyword: {
        Number: 'number',
        String: 'string',
        Boolean: 'boolean',
        Any: 'any',
        Void: 'void',
        Unknown: 'unknown',
        Null: 'null',
        Undefined: 'undefined',
        Object: 'object',
        File: 'File',
        Date: 'Date',
        Type: 'type',
        Enum: 'enum',
        Interface: 'interface',
        Array: 'Array',
        Record: 'Record',
        Intersection: '&',
        Union: '|',
      },
    };
  },

  primitiveTypeConstructs: (constructs) => {
    return {
      ...constructs,
      bool: () => {
        return 'boolean';
      },
      date: () => {
        return 'Date';
      },
      string: {
        'date-time': () => 'Date',
        date: () => 'Date',
      },
    };
  },
};
