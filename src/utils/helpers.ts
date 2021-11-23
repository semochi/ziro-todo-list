interface PropsSearch {
  keywork: string;
  data: Object[];
}


/**
 *  find object in array
 * @param keywork : string
 * @param data :  array data search
 * @returns
 */
export const findTask = ({ keywork, data }: PropsSearch) => {
  return data;
};
