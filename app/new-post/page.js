import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation'
import FormSubmit from '@/components/form-submit'

export default function NewPostPage() {
  async function createPost(formData) {
    "use server";
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    storePost({
      imageUrl: '',
      title,
      content,
      userId: 1
    })

    redirect('/feed');
  }

  return (
    <>
      <h1>Create a new post</h1>
      <form action={createPost}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
      </form>
    </>
  );
}
