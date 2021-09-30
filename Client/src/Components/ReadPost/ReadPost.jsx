import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_BLOG } from "../../redux/actions";
import { useHistory } from "react-router";

export default function ReadPost() {
  const [readdata, setreaddata] = useState({});
  const [form, setform] = useState(false);
  const localread = JSON.parse(localStorage.getItem("Readpost"));
  const localdata = JSON.parse(localStorage.getItem("Userinfo"));
  const [c, setc] = useState({
    Title: localread.Title,
    Message: localread.Message,
  });
  console.log(localread);
  const blogId = useSelector((store) => store.blogId);
  const id = blogId;
  console.log(blogId);
  useEffect(() => {
    axios.post("http://localhost:3500/readpost", { blogId: id }).then((res) => {
      console.log(res.data);
      setreaddata(res.data);
      setc(res.data);
    });
  }, []);
  const EditPost = () => {
    setform(true);
  };
  const history = useHistory();
  const Update = () => {
    axios
      .post("http://localhost:3500/update", c)
      .then((res) => console.log(res.data));

    history.push("/");
  };
  console.log(c);
  return (
    <div className="Read">
      <div className="container">
        <div className="row d-flex justify-content-center p-3">
          <div className="col-lg-8 border p-4">
            <h2 className="my-2">{localread.Title}</h2>
            <p style={{ wordWrap: "break-word" }}>{localread.Message}</p>
            {localdata._id === localread.User_id ? (
              <>
                <Button onClick={EditPost}>Edit</Button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>

        {form == true ? (
          <div className="row d-flex justify-content-center p-3">
            <div className="col-lg-8 border p-4">
              <form>
                <input
                  type="text"
                  name="Title"
                  className="form-control form-control-sm"
                  value={c.Title}
                  onChange={(e) =>
                    setc({ ...c, [e.target.name]: e.target.value })
                  }
                />
                <textarea
                  type="text"
                  rows="5"
                  name="Message"
                  className="form-control form-control-sm mt-3"
                  value={c.Message}
                  onChange={(e) =>
                    setc({ ...c, [e.target.name]: e.target.value })
                  }
                />
                <Button type="primary" className="mt-3" onClick={Update}>
                  Update
                </Button>
              </form>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
