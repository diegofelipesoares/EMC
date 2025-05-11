declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare const styles: {
  containerForm: string;
};

export default styles;