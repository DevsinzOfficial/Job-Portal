
import { Link } from "react-router-dom";

const FreelancerFooter = () => {
  return (
    <div>
      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-white">Helpful Links</p>
        <nav className="mt-8">
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                className="text-white transition hover:text-black hover:underline"
                to="/freelancer/exchangeSkills"
              >
                Exchange Skills
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-black hover:underline"
                to="/freelancer/jobs"
              >
                Jobs
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-black hover:underline"
                to="/freelancer/blogs"
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-black hover:underline"
                to="/freelancer/gigs"
              >
                Gigs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default FreelancerFooter;
