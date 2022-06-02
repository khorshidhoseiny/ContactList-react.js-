import { Link, NavLink, useLocation, useParams } from "react-router-dom";

const ContactDetail = ({ DeleteContactHandler }) => {
  const { id } = useParams();
  const location = useLocation();
  const contact = location.state?.contact;
  const onClickHandler = (id) => {
    DeleteContactHandler(id);
  };
  return (
    <div className="w-full md:w-2/4 flex relative justify-center mx-auto items-center ">
      <div className="top-0 flex items-end justify-end bg-transparent absolute left-0">
      <Link to="/" className="bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" bg-transparent mx-7  mt-5"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#ffff00"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
        </svg>
      </Link>
      </div>
      
      <div className="flex justify-center items-center flex-col">
        <svg
          width="200"
          height="200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M167.181 155.813a87.4339 87.4339 0 0 0 18.2-37.324 87.4217 87.4217 0 0 0-1.071-41.5114 87.4319 87.4319 0 0 0-20.1-36.3359 87.4308 87.4308 0 0 0-34.596-22.9655 87.4364 87.4364 0 0 0-79.9596 10.7145A87.4375 87.4375 0 0 0 12.5 100a86.8698 86.8698 0 0 0 20.3187 55.813l-.125.106c.4375.525.9375.975 1.3875 1.494.5625.643 1.1688 1.25 1.75 1.875 1.75 1.9 3.55 3.725 5.4375 5.437.575.525 1.1688 1.013 1.75 1.513 2 1.725 4.0563 3.362 6.1875 4.887.275.187.525.431.8.625v-.075a86.8812 86.8812 0 0 0 49.9998 15.829c17.9 0 35.362-5.528 50-15.829v.075c.275-.194.519-.438.8-.625 2.125-1.531 4.188-3.162 6.188-4.887.581-.5 1.175-.994 1.75-1.513 1.887-1.719 3.687-3.537 5.437-5.437.581-.625 1.181-1.232 1.75-1.875.444-.519.95-.969 1.388-1.501l-.138-.099Z"
            fill="#666"
          />
          <path
            d="M100 50c5.563 0 11 1.6495 15.625 4.7399a28.1222 28.1222 0 0 1 10.359 12.6221 28.1246 28.1246 0 0 1 1.601 16.2499 28.1277 28.1277 0 0 1-7.698 14.4005 28.1257 28.1257 0 0 1-14.4 7.6976 28.1271 28.1271 0 0 1-28.8721-11.9596A28.125 28.125 0 0 1 100 50ZM50.0438 155.813a31.224 31.224 0 0 1 9.2835-21.807A31.2214 31.2214 0 0 1 81.25 125h37.5a31.2223 31.2223 0 0 1 21.923 9.006c5.84 5.766 9.175 13.6 9.283 21.807C136.249 168.165 118.452 175 100 175c-18.4516 0-36.249-6.835-49.9562-19.187Z"
            fill="#fff"
          />
        </svg>

        <div className="flex m-3 gap-20 items-center justify-center">
          <div className="flex items-start flex-col text-left gap-y-3 p-4 ">
            <p className="text-yellow-400 font-bold ">
              Name:<span>{contact.name}</span>
            </p>
            <p className="text-yellow-400 font-bold ">
              Number:<span>{contact.number}</span>
            </p>
          </div>
          <Link to={`/edit/${id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="edit-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffff00"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
