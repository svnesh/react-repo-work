import { useEffect, useState } from "react"

const ScrollTracker = () => {

  const [scrollNum, setScrollNum] = useState(0);
  const [wsize, setWSize] = useState(0);

  useEffect(() => {

    const handleScroll = () => setScrollNum(window.scrollY);
    const handleResize = () => setWSize(window.innerWidth);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleScroll();
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <>
    <div style={{ position: 'fixed' }}>
      {
        <span>Scrolled: {scrollNum}px; Window Size: {wsize}</span>
        
      }
    </div>
    <div style={{ marginTop: '40px', overflowY: 'scroll' }}>      
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum voluptas soluta, maxime dolorum quos sit sint rerum facere earum quisquam ea quam reprehenderit officia cupiditate perferendis temporibus at dolores!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum voluptas soluta, maxime dolorum quos sit sint rerum facere earum quisquam ea quam reprehenderit officia cupiditate perferendis temporibus at dolores!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum voluptas soluta, maxime dolorum quos sit sint rerum facere earum quisquam ea quam reprehenderit officia cupiditate perferendis temporibus at dolores!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum voluptas soluta, maxime dolorum quos sit sint rerum facere earum quisquam ea quam reprehenderit officia cupiditate perferendis temporibus at dolores!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum voluptas soluta, maxime dolorum quos sit sint rerum facere earum quisquam ea quam reprehenderit officia cupiditate perferendis temporibus at dolores!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum voluptas soluta, maxime dolorum quos sit sint rerum facere earum quisquam ea quam reprehenderit officia cupiditate perferendis temporibus at dolores!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum voluptas soluta, maxime dolorum quos sit sint rerum facere earum quisquam ea quam reprehenderit officia cupiditate perferendis temporibus at dolores!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum voluptas soluta, maxime dolorum quos sit sint rerum facere earum quisquam ea quam reprehenderit officia cupiditate perferendis temporibus at dolores!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum voluptas soluta, maxime dolorum quos sit sint rerum facere earum quisquam ea quam reprehenderit officia cupiditate perferendis temporibus at dolores!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum voluptas soluta, maxime dolorum quos sit sint rerum facere earum quisquam ea quam reprehenderit officia cupiditate perferendis temporibus at dolores!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum voluptas soluta, maxime dolorum quos sit sint rerum facere earum quisquam ea quam reprehenderit officia cupiditate perferendis temporibus at dolores!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum voluptas soluta, maxime dolorum quos sit sint rerum facere earum quisquam ea quam reprehenderit officia cupiditate perferendis temporibus at dolores!
      </div>      
    </div>
    </>
  )
}

export default ScrollTracker