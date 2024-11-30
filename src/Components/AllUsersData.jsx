import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllUsersData = () => {
  const allUsers = useLoaderData();
  const [users, setUsers] = useState(allUsers);

  const handleUserDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
          const deleteUser = users.filter((user) => user._id !== id);
          setUsers(deleteUser);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="my-12">
      <h1 className="text-6xl my-12 text-center font-extrabold">
        All User Available Now {users.length}
      </h1>
      <div>
        <div className="overflow-x-auto container mx-auto ">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Joining Time</th>
                <th>Manage Your Account</th>
              </tr>
            </thead>
            {users.map((user, index) => (
              <tbody key={user._id}>
                {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createAt}</td>
                  <td className="space-x-2">
                    <Link>
                      <button className="bg-green-500 text-white font-thin px-6 py-2 rounded-lg">
                        Update
                      </button>
                    </Link>
                    <Link onClick={() => handleUserDelete(user._id)}>
                      <button className="bg-red-500 text-white font-thin px-6 py-2 rounded-lg">
                        Delete
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsersData;
