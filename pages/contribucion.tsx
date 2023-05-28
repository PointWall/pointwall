import Layout from "@/components/Layout";
import { PointwallSession } from "@/types/pointwallSession";
import { useSession } from "next-auth/react";
import { useState, FormEvent, ChangeEvent } from "react";

type inputValue = "title" | "description" | "location";
type InputOp = {
  value: inputValue;
  text: string;
};
const FORM_INITIAL_STATE = {
  email: "",
  title: "",
  description: "",
  userType: "",
  artType: "",
  location: "",
  images: [],
  getInContact: false,
  author: {
    id: -1,
    email: "",
  },
};

const USER_TYPE_OPTIONS = [
  {
    value: "Autor",
    id: "author",
    labelText: "Autor",
  },
  {
    value: "Centro cultural",
    id: "center",
    labelText: "Centro cultural",
  },
  {
    value: "Vecino",
    id: "neighbour",
    labelText: "Vecino/a o miembro de la comunidad",
  },
];

const TEXT_INPUTS: InputOp[] = [
  {
    value: "location",
    text: "¿Dónde queda? Agregá el link a ubicación en Google Maps",
  },
  {
    value: "title",
    text: "Que nombre le pondrias a la ubicacion? (cuanto mas claro sea mas posibilidades existen de que la publicacion sea tomada en cuenta!)",
  },
  {
    value: "description",
    text: "Quieres agregarle algun comentario/descripcion? (Cuanto mas clara sea mas posibilidades existen de que la publicacion sea tomada en cuenta!)",
  },
];

export default function Page(): JSX.Element {
  const { data: session } = useSession();
  const pointwallSession = session as PointwallSession;
  console.log(pointwallSession?.user);
  /*
  ARREGLAR PROBLEMA CON EL artType TEXT INPUT AL SELECCIONAR UNA OPCION PERO ESCRIBIR EN EL INPUT
  */
  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  // const [isOtherChecked, setIsOtherChecked] = useState(false)

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!pointwallSession?.user?.id || !pointwallSession?.user?.email) return;
    console.log(formData);
    formData.author = {
      id: pointwallSession?.user?.id,
      email: pointwallSession?.user?.email,
    };
    await fetch("http://localhost:3000/api/post", {
      method: "POST",
      body: JSON.stringify({ ...formData }),
      headers: {
        "content-type": "application/json",
      },
    }).catch((e) => console.log(e));

    setFormData(FORM_INITIAL_STATE);
  }

  // function handleInputChange (ev: ChangeEvent & { target: HTMLInputElement }): void {

  // }

  return (
    <Layout>
      <section className="text-center">
        <h1 className="text-8xl mt-16">Formulario de contribución</h1>
      </section>
      <section className="px-[15%] my-16 mb-8 accent-slate-700">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="pl-4 border-l-4 border-slate-700">
            <p className="text-xl">¿Qué tipo de usuario sos?</p>
            <div className="ml-4 my-2">
              {USER_TYPE_OPTIONS.map((userType) => (
                <div key={userType.id} className="flex gap-2">
                  <input
                    id={userType.id}
                    type="radio"
                    name="userType"
                    value={userType.value}
                    onChange={function (
                      ev: ChangeEvent & { target: HTMLInputElement }
                    ) {
                      setFormData((prevData) => ({
                        ...prevData,
                        userType: ev.target.value,
                      }));
                    }}
                  />
                  <label htmlFor={userType.id}>{userType.labelText}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="pl-4 border-l-4 border-slate-700">
            <p className="text-xl">
              ¿Qué tipo de manifestación artística querés que relevemos para
              nuestra página?
            </p>
            <div className="ml-4 my-2 accent-slate-700">
              <div className="flex gap-2">
                <input
                  id="mural"
                  type="radio"
                  name="artType"
                  value="Mural"
                  onChange={function (
                    ev: ChangeEvent & { target: HTMLInputElement }
                  ) {
                    setFormData((prevData) => ({
                      ...prevData,
                      artType: ev.target.value,
                    }));
                  }}
                />
                <label htmlFor="mural">Mural</label>
              </div>
              <div className="flex gap-2">
                <input
                  id="graffiti"
                  type="radio"
                  name="artType"
                  value="Graffiti"
                  onChange={function (
                    ev: ChangeEvent & { target: HTMLInputElement }
                  ) {
                    setFormData((prevData) => ({
                      ...prevData,
                      artType: ev.target.value,
                    }));
                  }}
                />
                <label htmlFor="graffiti">Graffiti</label>
              </div>
              <div className="flex gap-2">
                <input id="other" type="radio" name="artType" value="Otro" />
                <label htmlFor="other">Otro: </label>
                <input
                  type="text"
                  name="otherArtType"
                  onChange={function (
                    ev: ChangeEvent & { target: HTMLInputElement }
                  ) {
                    setFormData((prevData) => {
                      return {
                        ...prevData,
                        artType: ev.target.value,
                      };
                    });
                  }}
                  className="border-b-2 px-[.5em] bg-slate-50 outline-none focus:bg-slate-100 focus:border-slate-400"
                />
              </div>
            </div>
          </div>
          {TEXT_INPUTS.map((input) => (
            <div key={input.value} className="pl-4 border-l-4 border-slate-700">
              <p className="text-xl">{input.text}</p>
              <input
                type="text"
                className="min-w-[220px] w-1/3 px-[.5em] py-[.25em] bg-slate-50 border-b-2 outline-none focus:bg-slate-100 focus:border-slate-400"
                onChange={function (ev) {
                  let newData = formData;
                  newData[input.value] = ev.target.value;
                  setFormData(newData);
                }}
              />
            </div>
          ))}
          <div className="pl-4 border-l-4 border-slate-700">
            <p className="text-xl">
              ¿Tenés fotos que querés que incluyamos en la página?
            </p>
            <input type="file" className="my-2" />
          </div>
          <div className="pl-4 border-l-4 border-slate-700">
            <p className="text-xl">
              ¿Te interesaría que el equipo de PointWall guarde tu mail para
              ponerse en contacto con vos?
            </p>
            <div className="flex align-middle gap-1 ml-4 my-2">
              <input
                id="contactCheckbox"
                type="checkbox"
                onChange={function (ev) {
                  setFormData((prevData) => ({
                    ...prevData,
                    getInContact: ev.target.checked,
                  }));
                }}
              />
              <label htmlFor="contactCheckbox">
                Sí, me interesa que se pongan en contacto conmigo
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-slate-700 w-fit px-[1em] py-[.5em] my-4 border rounded-md hover:brightness-90 active:brightness-75"
          >
            Enviar
          </button>
        </form>
      </section>
    </Layout>
  );
}
