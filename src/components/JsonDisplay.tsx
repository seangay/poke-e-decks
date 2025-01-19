interface Props {
  json: object;
}
const JsonDisplay = ({ json }: Props) => {
  return <pre>{JSON.stringify(json, null, 2)}</pre>;
};

export default JsonDisplay;
