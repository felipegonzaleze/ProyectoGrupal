import { Menu } from "antd";

export const Megamenu = () => {
  return (
    <>
      <Menu
        mode="horizontal"
        items={[
          {
            label: "Educación",
            key: "Educación",
            children: [
              {
                label: "Educación Financiera",
                key: "Educacion-Financiera",
              },
              {
                label: "Educación Continua",
                key: "Educacion-Continua",
              },
            ],
          },
          {
            label: "Mundo Laboral",
            key: "Mundo-Laboral",
            children: [
              {
                label: "Tips para tus entrevistas",
                key: "Tips-entrevistas",
              },
              {
                label: "Como armar tu cv",
                key: "Como-Armar-CV",
              },
            ],
          },
          {
            label: "Trámites",
            key: "Tramites",
            children: [
              {
                label: "Ir al banco",
                key: "banco",
              },
            ],
          },
          {
            label: "Tips para la adultez",
            key: "Tips-adultez",
            children: [
              {
                label: "Salud mental",
                key: "salud-mental",
              },
              {
                label: "Haz ejercicio",
                key: "ejercicio",
              },
            ],
          },
          {
            label: "Como ir a un hospital",
            key: "Como_ir_hospital",
          },
        ]}
      ></Menu>
    </>
  );
};
