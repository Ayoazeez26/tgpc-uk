export const useProfile = () => {
  const token = useState<string>('string');

  const setToken = (value: string) => {
    token.value = value;
    console.log(token.value);
  };

  return { id: null, name: null, token, setToken };
};
