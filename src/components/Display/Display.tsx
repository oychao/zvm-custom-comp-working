/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */

interface DisplayProps {
  globalData: Record<string, any>;
  setGlobalData: (newValue: any) => void;
  value?: string;
}

export function Display(props: DisplayProps) {
  return (
    <div>
      <h1>{props.value || 'NO INPUT'}</h1>
      <hr />
      <input
        onInput={e => {
          console.log((e.target as HTMLInputElement).value);
          props.setGlobalData({
            ...props.globalData,
            message: (e.target as HTMLInputElement).value,
          });
        }}
      />
    </div>
  );
}
