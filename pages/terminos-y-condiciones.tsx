import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'

interface IList {
  title?: string
  items: string[]
  footer?: string[]
}

interface IContent {
  title?: string
  paragraphs: string[]
  lists?: IList[]
}

const CONTENT: IContent[] = [
  {
    paragraphs: [
      'Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de PointWall, ubicado en pointwall.com.ar.',
      'Al acceder a este sitio web asumimos que acepta estos términos y condiciones. No siga utilizando PointWall si no acepta aceptar todos los términos y condiciones expuestos en esta página.',
      'La siguiente terminología se aplica a estos Términos y Condiciones, Declaración de Privacidad y Aviso Legal y a todos los Acuerdos: "Cliente", "Usted" y "Su" se refiere a usted, la persona que se registra en este sitio web y conforme a los términos y condiciones de la Compañía. "La Compañía", "Nosotros", "Nosotros", "Nuestro" y "Nosotros", se refiere a nuestra Compañía. "Parte", "Partes" o "Nosotros", se refiere tanto al Cliente como a nosotros. Todos los términos se refieren a la oferta, aceptación y consideración del pago necesario para llevar a cabo el proceso de nuestra asistencia al Cliente de la manera más adecuada con el propósito expreso de satisfacer las necesidades del Cliente con respecto a la prestación de los servicios indicados de la Empresa, de conformidad con y con sujeción a la legislación vigente de af. Cualquier uso de la terminología anterior u otras palabras en singular, plural, mayúsculas y/o él/ella o ellos, se consideran intercambiables y, por tanto, se refieren a lo mismo. mismo.'
    ]
  },
  {
    title: 'Cookies',
    paragraphs: [
      'Utilizamos cookies. Al acceder a PointWall, usted acepta el uso de cookies de acuerdo con la Política de privacidad de PointWall.',
      'La mayoría de los sitios web interactivos utilizan cookies que nos permiten recuperar los datos del usuario en cada visita. Nuestro sitio web utiliza cookies para permitir la funcionalidad de determinadas áreas y facilitar así la visita a nuestro sitio web. Algunos de nuestros socios afiliados/publicitarios también pueden utilizar cookies.'
    ]
  },
  {
    title: 'Licencia',
    paragraphs: [
      'A menos que se indique lo contrario, PointWall y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material de PointWall. Todos los derechos de propiedad intelectual están reservados. Puede acceder a este material desde PointWall para su uso personal sujeto a las restricciones establecidas en estos términos y condiciones.',
      'Algunas partes de este sitio web ofrecen a los usuarios la oportunidad de publicar e intercambiar opiniones e información en determinadas áreas del sitio web. PointWall no filtra, edita, publica o revisa los Comentarios antes de su presencia en el sitio web. Los comentarios no reflejan los puntos de vista y opiniones de PointWall, sus agentes y/o afiliados. Los comentarios reflejan los puntos de vista y opiniones de la persona que publica sus puntos de vista y opiniones. En la medida permitida por las leyes aplicables, PointWall no será responsable de los Comentarios ni de ninguna responsabilidad, daños o gastos causados y/o sufridos como resultado de cualquier uso y/o publicación y/o aparición de los Comentarios en este sitio web.',
      'PointWall se reserva el derecho de supervisar todos los Comentarios y de eliminar cualquier Comentario que pueda considerarse inapropiado, ofensivo o que infrinja estos Términos y Condiciones.',
      'Por la presente, usted concede a PointWall una licencia no exclusiva para utilizar, reproducir, editar y autorizar a otros a utilizar, reproducir y editar cualquiera de sus Comentarios en todas y cada una de las formas, formatos o medios.'
    ],
    lists: [
      {
        title: 'Usted no debe:',
        items: [
          'Volver a publicar material de PointWall',
          'Vender, alquilar o sublicenciar material de PointWall',
          'Reproducir, duplicar o copiar material de PointWall',
          'Redistribuir contenidos de PointWall'
        ]
      },
      {
        title: 'Usted garantiza y declara que:',
        items: [
          'Usted tiene derecho a publicar los Comentarios en nuestro sitio web y dispone de todas las licencias y consentimientos necesarios para hacerlo;',
          'Los Comentarios no invaden ningún derecho de propiedad intelectual, incluidos, entre otros, derechos de autor, patentes o marcas registradas de terceros;',
          'Los Comentarios no contienen ningún material difamatorio, calumnioso, ofensivo, indecente o ilegal que suponga una invasión de la intimidad.',
          'Los Comentarios no se utilizarán para solicitar o promocionar negocios o costumbres ni para presentar actividades comerciales o ilícitas.'
        ]
      }
    ]
  },
  {
    title: 'Hipervínculos a nuestro contenido',
    paragraphs: [],
    lists: [
      {
        title: 'Las siguientes organizaciones pueden enlazar con nuestro sitio web sin autorización previa por escrito:',
        items: [
          'Agencias de gobierno;',
          'Motores de búsqueda;',
          'Organismos de noticias;',
          'Los distribuidores de directorios en línea pueden enlazar con nuestro sitio Web de la misma forma que hiperenlazan con los sitios Web de otras empresas incluidas en la lista; y',
          'Empresas acreditadas en todo el sistema, excepto organizaciones sin ánimo de lucro, centros comerciales benéficos y grupos de recaudación de fondos benéficos que no pueden establecer hipervínculos con nuestro sitio web.'
        ],
        footer: ['Estas organizaciones pueden enlazar con nuestra página de inicio, con publicaciones o con otra información del sitio web siempre que el enlace (a) no sea en modo alguno engañoso; (b) no implique falsamente el patrocinio, respaldo o aprobación de la parte enlazante y sus productos y/o servicios; y (c) se ajuste al contexto del sitio de la parte enlazante.']
      },
      {
        title: 'Podemos considerar y aprobar otras solicitudes de enlaces de los siguientes tipos de organizaciones:',
        items: [
          'fuentes de información comúnmente conocidas por consumidores y/o empresas;',
          'sitios de la comunidad punto.com;',
          'asociaciones u otros grupos que representen a organizaciones benéficas;',
          'distribuidores de directorios en línea;',
          'portales de internet;',
          'empresas de contabilidad, abogacía y consultoría; y',
          'instituciones educativas y asociaciones comerciales.'
        ],
        footer: [
          'Aprobaremos las solicitudes de enlace de estas organizaciones si decidimos que (a) el enlace no nos haría quedar mal con nosotros mismos o con nuestras empresas acreditadas; (b) la organización no tiene antecedentes negativos con nosotros; (c) el beneficio para nosotros de la visibilidad del hipervínculo compensa la ausencia de PointWall; y (d) el enlace está en el contexto de información general sobre recursos.',
          'Estas organizaciones pueden enlazar con nuestra página de inicio siempre que el enlace (a) no sea en modo alguno engañoso; (b) no implique falsamente el patrocinio, respaldo o aprobación de la parte enlazante y sus productos o servicios; y (c) se ajuste al contexto del sitio de la parte enlazante.',
          'Si usted es una de las organizaciones enumeradas en el apartado 2 anterior y está interesado en establecer un enlace con nuestro sitio Web, debe informarnos enviando un correo electrónico a PointWall. Por favor, incluya su nombre, el nombre de su organización, información de contacto, así como la URL de su sitio, una lista de las URL desde las que pretende enlazar a nuestro sitio web y una lista de las URL de nuestro sitio a las que le gustaría enlazar. Espere 2-3 semanas para recibir una respuesta.'
        ]
      },
      {
        title: 'Las organizaciones autorizadas pueden establecer hiperenlaces con nuestro sitio web de la siguiente manera:',
        items: [
          'Mediante el uso de nuestro nombre corporativo; o',
          'Mediante el uso del localizador uniforme de recursos al que se enlaza; o',
          'Mediante el uso de cualquier otra descripción de nuestro Sitio Web al que se enlaza que tenga sentido dentro del contexto y el formato del contenido del sitio de la parte que realiza el enlace.'
        ],
        footer: ['No se permitirá el uso del logotipo u otras ilustraciones de PointWall para establecer enlaces sin un acuerdo de licencia de marca comercial.']
      }
    ]
  },
  {
    title: 'iFrames',
    paragraphs: [
      'Sin previa aprobación y autorización por escrito, no podrá crear marcos alrededor de nuestras Páginas Web que alteren en modo alguno la presentación visual o el aspecto de nuestro Sitio Web.'
    ]
  },
  {
    title: 'Responsabilidad por contenidos',
    paragraphs: [
      'No seremos responsables de ningún contenido que aparezca en su sitio web. Usted se compromete a protegernos y defendernos frente a cualquier reclamación que se plantee en su Sitio Web. No deben aparecer enlaces en ningún sitio web que puedan interpretarse como difamatorios, obscenos o delictivos, o que infrinjan, violen de otro modo o propugnen la infracción u otra violación de los derechos de terceros.'
    ]
  },
  {
    title: 'Reserva de derechos',
    paragraphs: [
      'Nos reservamos el derecho a solicitarle que elimine todos los enlaces o cualquier enlace concreto a nuestro Sitio Web. Usted se compromete a eliminar inmediatamente todos los enlaces a nuestro Sitio Web cuando así se le solicite. También nos reservamos el derecho a modificar estas condiciones y su política de enlaces en cualquier momento. Al enlazar continuamente con nuestro sitio web, usted acepta cumplir y respetar estas condiciones de enlace.'
    ]
  },
  {
    title: 'Eliminación de enlaces de nuestro sitio web',
    paragraphs: [
      'Si encuentra algún enlace en nuestro Sitio Web que le resulte ofensivo por cualquier motivo, puede ponerse en contacto con nosotros e informarnos en cualquier momento. Tendremos en cuenta las solicitudes de eliminación de enlaces, pero no estamos obligados a hacerlo ni a responderle directamente.',
      'No aseguramos que la información contenida en este sitio web sea correcta, no garantizamos que esté completa ni que sea exacta; tampoco prometemos que el sitio web siga estando disponible ni que el material que contiene se mantenga actualizado.'
    ]
  },
  {
    title: 'Descargo de responsabilidad',
    paragraphs: [],
    lists: [
      {
        title: 'En la medida máxima permitida por la ley aplicable, excluimos todas las representaciones, garantías y condiciones relacionadas con nuestro sitio web y el uso de este sitio web. Nada de lo contenido en esta cláusula de exención de responsabilidad:',
        items: [
          'limitar o excluir nuestra responsabilidad o la suya por fraude o tergiversación fraudulenta;',
          'limitar cualquiera de nuestras responsabilidades o las suyas de cualquier forma que no esté permitida por la legislación aplicable; o',
          'excluir cualquiera de nuestras responsabilidades o de las suyas que no puedan excluirse en virtud de la legislación aplicable.'
        ],
        footer: [
          'Las limitaciones y prohibiciones de responsabilidad establecidas en esta sección y en otras partes de esta cláusula de exención de responsabilidad: (a) están sujetas al párrafo anterior; y (b) rigen todas las responsabilidades derivadas de la cláusula de exención de responsabilidad, incluidas las responsabilidades contractuales, extracontractuales y por incumplimiento de obligaciones legales.',
          'En la medida en que el sitio web y la información y los servicios que en él se ofrecen son gratuitos, no seremos responsables de ninguna pérdida o daño de cualquier naturaleza.'
        ]
      }
    ]
  }
]

export default function Page (): JSX.Element {
  return (
    <>
      <Head>
        <title>Términos y Condiciones</title>
      </Head>
      <Layout color='yellow'>
        <section className='max-w-prose mx-auto my-8'>
          <h1 className='text-4xl'>
            Términos y Condiciones
          </h1>

          {CONTENT.map((section, i) => (
            <div key={i} className='my-8'>
              {section.title !== undefined ? <h3 className='text-3xl mb-4'>{section.title}</h3> : null}
              {section.paragraphs.map((p, i) => (
                <p key={i} className='my-2'>
                  {p}
                </p>
              )
              )}
              {section.lists !== undefined
                ? (
                  <div>
                    {section.lists.map((list) => (
                      <div key={list.title} className='my-4'>
                        <p>{list.title}</p>
                        <ul className='my-2 list-decimal pl-6 space-y-2'>
                          {list.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        {list.footer !== undefined && <div>{list.footer.map((text, i) => <p key={i} className='my-2'>{text}</p>)}</div>}
                      </div>))}
                  </div>
                  )
                : null}
            </div>
          ))}

          <p>
            El presente Acuerdo entrará en vigor en la fecha del mismo. Nuestros Términos y Condiciones se han creado con la ayuda de
            {' '}
            <Link target='_blank' href='https://www.termsandconditionsgenerator.com/' rel='noreferrer' className='text-blue-700 underline'>
              Free Terms and Conditions Generator
            </Link>
            .
          </p>

        </section>
      </Layout>
    </>
  )
}
