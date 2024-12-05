import { useState, useEffect } from "react";
import PostForm from "../../components/Post/PostForm";
import Loading from "../../components/Loading/Loading";

function PostPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false); 
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <PostForm />
      )}
    </div>
  );
}

export default PostPage;
