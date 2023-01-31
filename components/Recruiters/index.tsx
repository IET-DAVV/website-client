import React, {Component, useState} from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Recruiters.module.scss";


export interface RecruiterProps {
  variant: 'var1'| 'var2'
}

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slideToScroll:1,
      autoplay: true,
      speed: 500,
      initialSlide:0,
      autoplaySpeed: 1000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

const Recruiters: React.FC<RecruiterProps>  = ( sampleProp )=>{


  const [recruiters, setRecruiters] = useState([{
    company: 'Zs1',
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABeCAMAAAAuRHtGAAAAwFBMVEX////BxceXo63rcQCHio2yVwCLSACSn6nv8PDd4OO9wsTByM7Q09R8gIPy8/P19vbl5ebqagDqYwDrchjzspH40cGut77t5uLz6OKIPgCJQwC+n4+rQgDXxr/Bf1+jdl+DNgC0XRiuTADQZQCnqqyRlJfvlGa1t7mbnaDbagC2hnDtfkvui1rpWwClg3VxdXmGlKCLVTWITiu/rKLKUwCMTSXajGbQZhjaYgDhq5DLXADDmoi4jXv2xa/0uJ799fD31emAAAAEVUlEQVRoge3aeXebOBAAcGPjcBgZkm53N+6xKYZC3HRz9G7T9vt/q9WMOHSMMHm1zL6Xzl/YlvkhMRoB9mz2/4x0Gjb7cxo2mMTNgkncLJjPJ3BDzk7gInt8N7yZT+Gm2Nvju+FjclPS/emajVak+8Yxm92Q7tVbx2wQUO7V6Zlb9mZOuVenC6cu1GTC5axTF1jCBdalG6FmuMg6dBtMdwXr0I1o98nit9vHmg65SRIXdV0XVUKZEeUG/5JuFvbfu2ZU+H2Dmr8Swa6LcKZGdEO6t/9QblZJbrtTNcrm47RQP2eVNsIB5d6eU24Wx4P9ldy0hFfML/k4lz5ul6HMzin3drMh3Cz2JDf09EhKvvtafFqilIizHSbiKEKJpdzbzQnhclZ2zYj6fXtMG1n+BotllnA5S7jADropsM2+dZZ/XWMNd37HWdNFdtCtYCzFZtJv9oelsoaLrOEKdsjNoI9Zcwi+NKp6rEj3r/MTyk28fW7Nu1j02+0huHYhk/x2LOEYjuOuIam6cgj9jR7gviPd9yPcop+6Mzy/fmVpSbh3zyh3+3y/C0WzLwsin21PKgz37oJyt8sRrq8lMFO6P+x+2JwT7nY5wq2kBQEjBrikG2vuh80J4XJ2vxsyI49KXIOKNdFadaFcyO5HdIHd75bS1G2jxtWJlZ5BKy5WKcndvgYX2b2uR2ZRLNZfxmqNll1RHHt3uwD303KMGypTV3q/YC1dyCdBcl9cnCju5QLdV6Pcwpq7odde6rC6l+0uZ8e7iTp1dTouG7loz4TVBXa8WxpLrU5XvqCzQfcC2cXHkS6sumyIbcekGxWL+xnZry/HuZk5dcnAi4JywP37VBTHkW5NTF1rl0XWD7h83o5zcepSRcmMLu3tLpSLUW4KnfBGsaKYprT7BV2sUr2b76xuPbDsGNFmlul+/gNcURw7N9/FNjdiQ9dRepRNY8O9PAX361Jx851ndc3bnn0u1d/LBbq54ua7ldWthq4qjFhbzi8vF6YLrM3NGL0eQBTm+xWdz1ClDBdZm1vak4qvRHqWR/T8xeKou0tkLS696jYsrEBKwiV0vRLFUXd3DUa5cBfmF1GiB9TMqFmBkqZ1mODVR5P6kvv0jHS9fa5vec6QicVP3HY3992+35TxQ7jW5wxx92yjfc7QXV3+oks+Vemfq6z5qtvR7LruE7x1U8rNv5GulKWZJaQWXsXHmI91lchLh3CBNd38PiFdKnsfGugGeCS6m997pHsIVrjifGlufr8i3YOw6DZporrAUu5hWHDb7FRcZA039g71C/gq6CaF7D5H1uzvwX54X/W1VnZFTTZcJ7/3S27aYJrrJmQ3fjzu2XfKjQ81gWzu2Y8Z4TpkhYus4bpk0RWs2V+HLLgNa7guWe62rOo6HWRw37as1l+37Oxpx6quY1b+54DsHjMeqRtP47qeQBb3+Cy6E7DgHv3cCncSFvo7BTtbT8NO9f9U5/EfXpqBTviwvxoAAAAASUVORK5CYII=' 
  },
  {
    company: 'Zs2',
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABeCAMAAAAuRHtGAAAAwFBMVEX////BxceXo63rcQCHio2yVwCLSACSn6nv8PDd4OO9wsTByM7Q09R8gIPy8/P19vbl5ebqagDqYwDrchjzspH40cGut77t5uLz6OKIPgCJQwC+n4+rQgDXxr/Bf1+jdl+DNgC0XRiuTADQZQCnqqyRlJfvlGa1t7mbnaDbagC2hnDtfkvui1rpWwClg3VxdXmGlKCLVTWITiu/rKLKUwCMTSXajGbQZhjaYgDhq5DLXADDmoi4jXv2xa/0uJ799fD31emAAAAEVUlEQVRoge3aeXebOBAAcGPjcBgZkm53N+6xKYZC3HRz9G7T9vt/q9WMOHSMMHm1zL6Xzl/YlvkhMRoB9mz2/4x0Gjb7cxo2mMTNgkncLJjPJ3BDzk7gInt8N7yZT+Gm2Nvju+FjclPS/emajVak+8Yxm92Q7tVbx2wQUO7V6Zlb9mZOuVenC6cu1GTC5axTF1jCBdalG6FmuMg6dBtMdwXr0I1o98nit9vHmg65SRIXdV0XVUKZEeUG/5JuFvbfu2ZU+H2Dmr8Swa6LcKZGdEO6t/9QblZJbrtTNcrm47RQP2eVNsIB5d6eU24Wx4P9ldy0hFfML/k4lz5ul6HMzin3drMh3Cz2JDf09EhKvvtafFqilIizHSbiKEKJpdzbzQnhclZ2zYj6fXtMG1n+BotllnA5S7jADropsM2+dZZ/XWMNd37HWdNFdtCtYCzFZtJv9oelsoaLrOEKdsjNoI9Zcwi+NKp6rEj3r/MTyk28fW7Nu1j02+0huHYhk/x2LOEYjuOuIam6cgj9jR7gviPd9yPcop+6Mzy/fmVpSbh3zyh3+3y/C0WzLwsin21PKgz37oJyt8sRrq8lMFO6P+x+2JwT7nY5wq2kBQEjBrikG2vuh80J4XJ2vxsyI49KXIOKNdFadaFcyO5HdIHd75bS1G2jxtWJlZ5BKy5WKcndvgYX2b2uR2ZRLNZfxmqNll1RHHt3uwD303KMGypTV3q/YC1dyCdBcl9cnCju5QLdV6Pcwpq7odde6rC6l+0uZ8e7iTp1dTouG7loz4TVBXa8WxpLrU5XvqCzQfcC2cXHkS6sumyIbcekGxWL+xnZry/HuZk5dcnAi4JywP37VBTHkW5NTF1rl0XWD7h83o5zcepSRcmMLu3tLpSLUW4KnfBGsaKYprT7BV2sUr2b76xuPbDsGNFmlul+/gNcURw7N9/FNjdiQ9dRepRNY8O9PAX361Jx851ndc3bnn0u1d/LBbq54ua7ldWthq4qjFhbzi8vF6YLrM3NGL0eQBTm+xWdz1ClDBdZm1vak4qvRHqWR/T8xeKou0tkLS696jYsrEBKwiV0vRLFUXd3DUa5cBfmF1GiB9TMqFmBkqZ1mODVR5P6kvv0jHS9fa5vec6QicVP3HY3992+35TxQ7jW5wxx92yjfc7QXV3+oks+Vemfq6z5qtvR7LruE7x1U8rNv5GulKWZJaQWXsXHmI91lchLh3CBNd38PiFdKnsfGugGeCS6m997pHsIVrjifGlufr8i3YOw6DZporrAUu5hWHDb7FRcZA039g71C/gq6CaF7D5H1uzvwX54X/W1VnZFTTZcJ7/3S27aYJrrJmQ3fjzu2XfKjQ81gWzu2Y8Z4TpkhYus4bpk0RWs2V+HLLgNa7guWe62rOo6HWRw37as1l+37Oxpx6quY1b+54DsHjMeqRtP47qeQBb3+Cy6E7DgHv3cCncSFvo7BTtbT8NO9f9U5/EfXpqBTviwvxoAAAAASUVORK5CYII=' 
  },
  {
    company: 'Zs3',
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABeCAMAAAAuRHtGAAAAwFBMVEX////BxceXo63rcQCHio2yVwCLSACSn6nv8PDd4OO9wsTByM7Q09R8gIPy8/P19vbl5ebqagDqYwDrchjzspH40cGut77t5uLz6OKIPgCJQwC+n4+rQgDXxr/Bf1+jdl+DNgC0XRiuTADQZQCnqqyRlJfvlGa1t7mbnaDbagC2hnDtfkvui1rpWwClg3VxdXmGlKCLVTWITiu/rKLKUwCMTSXajGbQZhjaYgDhq5DLXADDmoi4jXv2xa/0uJ799fD31emAAAAEVUlEQVRoge3aeXebOBAAcGPjcBgZkm53N+6xKYZC3HRz9G7T9vt/q9WMOHSMMHm1zL6Xzl/YlvkhMRoB9mz2/4x0Gjb7cxo2mMTNgkncLJjPJ3BDzk7gInt8N7yZT+Gm2Nvju+FjclPS/emajVak+8Yxm92Q7tVbx2wQUO7V6Zlb9mZOuVenC6cu1GTC5axTF1jCBdalG6FmuMg6dBtMdwXr0I1o98nit9vHmg65SRIXdV0XVUKZEeUG/5JuFvbfu2ZU+H2Dmr8Swa6LcKZGdEO6t/9QblZJbrtTNcrm47RQP2eVNsIB5d6eU24Wx4P9ldy0hFfML/k4lz5ul6HMzin3drMh3Cz2JDf09EhKvvtafFqilIizHSbiKEKJpdzbzQnhclZ2zYj6fXtMG1n+BotllnA5S7jADropsM2+dZZ/XWMNd37HWdNFdtCtYCzFZtJv9oelsoaLrOEKdsjNoI9Zcwi+NKp6rEj3r/MTyk28fW7Nu1j02+0huHYhk/x2LOEYjuOuIam6cgj9jR7gviPd9yPcop+6Mzy/fmVpSbh3zyh3+3y/C0WzLwsin21PKgz37oJyt8sRrq8lMFO6P+x+2JwT7nY5wq2kBQEjBrikG2vuh80J4XJ2vxsyI49KXIOKNdFadaFcyO5HdIHd75bS1G2jxtWJlZ5BKy5WKcndvgYX2b2uR2ZRLNZfxmqNll1RHHt3uwD303KMGypTV3q/YC1dyCdBcl9cnCju5QLdV6Pcwpq7odde6rC6l+0uZ8e7iTp1dTouG7loz4TVBXa8WxpLrU5XvqCzQfcC2cXHkS6sumyIbcekGxWL+xnZry/HuZk5dcnAi4JywP37VBTHkW5NTF1rl0XWD7h83o5zcepSRcmMLu3tLpSLUW4KnfBGsaKYprT7BV2sUr2b76xuPbDsGNFmlul+/gNcURw7N9/FNjdiQ9dRepRNY8O9PAX361Jx851ndc3bnn0u1d/LBbq54ua7ldWthq4qjFhbzi8vF6YLrM3NGL0eQBTm+xWdz1ClDBdZm1vak4qvRHqWR/T8xeKou0tkLS696jYsrEBKwiV0vRLFUXd3DUa5cBfmF1GiB9TMqFmBkqZ1mODVR5P6kvv0jHS9fa5vec6QicVP3HY3992+35TxQ7jW5wxx92yjfc7QXV3+oks+Vemfq6z5qtvR7LruE7x1U8rNv5GulKWZJaQWXsXHmI91lchLh3CBNd38PiFdKnsfGugGeCS6m997pHsIVrjifGlufr8i3YOw6DZporrAUu5hWHDb7FRcZA039g71C/gq6CaF7D5H1uzvwX54X/W1VnZFTTZcJ7/3S27aYJrrJmQ3fjzu2XfKjQ81gWzu2Y8Z4TpkhYus4bpk0RWs2V+HLLgNa7guWe62rOo6HWRw37as1l+37Oxpx6quY1b+54DsHjMeqRtP47qeQBb3+Cy6E7DgHv3cCncSFvo7BTtbT8NO9f9U5/EfXpqBTviwvxoAAAAASUVORK5CYII=' 
  },
  {
    company: 'Zs4',
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABeCAMAAAAuRHtGAAAAwFBMVEX////BxceXo63rcQCHio2yVwCLSACSn6nv8PDd4OO9wsTByM7Q09R8gIPy8/P19vbl5ebqagDqYwDrchjzspH40cGut77t5uLz6OKIPgCJQwC+n4+rQgDXxr/Bf1+jdl+DNgC0XRiuTADQZQCnqqyRlJfvlGa1t7mbnaDbagC2hnDtfkvui1rpWwClg3VxdXmGlKCLVTWITiu/rKLKUwCMTSXajGbQZhjaYgDhq5DLXADDmoi4jXv2xa/0uJ799fD31emAAAAEVUlEQVRoge3aeXebOBAAcGPjcBgZkm53N+6xKYZC3HRz9G7T9vt/q9WMOHSMMHm1zL6Xzl/YlvkhMRoB9mz2/4x0Gjb7cxo2mMTNgkncLJjPJ3BDzk7gInt8N7yZT+Gm2Nvju+FjclPS/emajVak+8Yxm92Q7tVbx2wQUO7V6Zlb9mZOuVenC6cu1GTC5axTF1jCBdalG6FmuMg6dBtMdwXr0I1o98nit9vHmg65SRIXdV0XVUKZEeUG/5JuFvbfu2ZU+H2Dmr8Swa6LcKZGdEO6t/9QblZJbrtTNcrm47RQP2eVNsIB5d6eU24Wx4P9ldy0hFfML/k4lz5ul6HMzin3drMh3Cz2JDf09EhKvvtafFqilIizHSbiKEKJpdzbzQnhclZ2zYj6fXtMG1n+BotllnA5S7jADropsM2+dZZ/XWMNd37HWdNFdtCtYCzFZtJv9oelsoaLrOEKdsjNoI9Zcwi+NKp6rEj3r/MTyk28fW7Nu1j02+0huHYhk/x2LOEYjuOuIam6cgj9jR7gviPd9yPcop+6Mzy/fmVpSbh3zyh3+3y/C0WzLwsin21PKgz37oJyt8sRrq8lMFO6P+x+2JwT7nY5wq2kBQEjBrikG2vuh80J4XJ2vxsyI49KXIOKNdFadaFcyO5HdIHd75bS1G2jxtWJlZ5BKy5WKcndvgYX2b2uR2ZRLNZfxmqNll1RHHt3uwD303KMGypTV3q/YC1dyCdBcl9cnCju5QLdV6Pcwpq7odde6rC6l+0uZ8e7iTp1dTouG7loz4TVBXa8WxpLrU5XvqCzQfcC2cXHkS6sumyIbcekGxWL+xnZry/HuZk5dcnAi4JywP37VBTHkW5NTF1rl0XWD7h83o5zcepSRcmMLu3tLpSLUW4KnfBGsaKYprT7BV2sUr2b76xuPbDsGNFmlul+/gNcURw7N9/FNjdiQ9dRepRNY8O9PAX361Jx851ndc3bnn0u1d/LBbq54ua7ldWthq4qjFhbzi8vF6YLrM3NGL0eQBTm+xWdz1ClDBdZm1vak4qvRHqWR/T8xeKou0tkLS696jYsrEBKwiV0vRLFUXd3DUa5cBfmF1GiB9TMqFmBkqZ1mODVR5P6kvv0jHS9fa5vec6QicVP3HY3992+35TxQ7jW5wxx92yjfc7QXV3+oks+Vemfq6z5qtvR7LruE7x1U8rNv5GulKWZJaQWXsXHmI91lchLh3CBNd38PiFdKnsfGugGeCS6m997pHsIVrjifGlufr8i3YOw6DZporrAUu5hWHDb7FRcZA039g71C/gq6CaF7D5H1uzvwX54X/W1VnZFTTZcJ7/3S27aYJrrJmQ3fjzu2XfKjQ81gWzu2Y8Z4TpkhYus4bpk0RWs2V+HLLgNa7guWe62rOo6HWRw37as1l+37Oxpx6quY1b+54DsHjMeqRtP47qeQBb3+Cy6E7DgHv3cCncSFvo7BTtbT8NO9f9U5/EfXpqBTviwvxoAAAAASUVORK5CYII=' 
  },
  {
    company: 'Zs5',
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABeCAMAAAAuRHtGAAAAwFBMVEX////BxceXo63rcQCHio2yVwCLSACSn6nv8PDd4OO9wsTByM7Q09R8gIPy8/P19vbl5ebqagDqYwDrchjzspH40cGut77t5uLz6OKIPgCJQwC+n4+rQgDXxr/Bf1+jdl+DNgC0XRiuTADQZQCnqqyRlJfvlGa1t7mbnaDbagC2hnDtfkvui1rpWwClg3VxdXmGlKCLVTWITiu/rKLKUwCMTSXajGbQZhjaYgDhq5DLXADDmoi4jXv2xa/0uJ799fD31emAAAAEVUlEQVRoge3aeXebOBAAcGPjcBgZkm53N+6xKYZC3HRz9G7T9vt/q9WMOHSMMHm1zL6Xzl/YlvkhMRoB9mz2/4x0Gjb7cxo2mMTNgkncLJjPJ3BDzk7gInt8N7yZT+Gm2Nvju+FjclPS/emajVak+8Yxm92Q7tVbx2wQUO7V6Zlb9mZOuVenC6cu1GTC5axTF1jCBdalG6FmuMg6dBtMdwXr0I1o98nit9vHmg65SRIXdV0XVUKZEeUG/5JuFvbfu2ZU+H2Dmr8Swa6LcKZGdEO6t/9QblZJbrtTNcrm47RQP2eVNsIB5d6eU24Wx4P9ldy0hFfML/k4lz5ul6HMzin3drMh3Cz2JDf09EhKvvtafFqilIizHSbiKEKJpdzbzQnhclZ2zYj6fXtMG1n+BotllnA5S7jADropsM2+dZZ/XWMNd37HWdNFdtCtYCzFZtJv9oelsoaLrOEKdsjNoI9Zcwi+NKp6rEj3r/MTyk28fW7Nu1j02+0huHYhk/x2LOEYjuOuIam6cgj9jR7gviPd9yPcop+6Mzy/fmVpSbh3zyh3+3y/C0WzLwsin21PKgz37oJyt8sRrq8lMFO6P+x+2JwT7nY5wq2kBQEjBrikG2vuh80J4XJ2vxsyI49KXIOKNdFadaFcyO5HdIHd75bS1G2jxtWJlZ5BKy5WKcndvgYX2b2uR2ZRLNZfxmqNll1RHHt3uwD303KMGypTV3q/YC1dyCdBcl9cnCju5QLdV6Pcwpq7odde6rC6l+0uZ8e7iTp1dTouG7loz4TVBXa8WxpLrU5XvqCzQfcC2cXHkS6sumyIbcekGxWL+xnZry/HuZk5dcnAi4JywP37VBTHkW5NTF1rl0XWD7h83o5zcepSRcmMLu3tLpSLUW4KnfBGsaKYprT7BV2sUr2b76xuPbDsGNFmlul+/gNcURw7N9/FNjdiQ9dRepRNY8O9PAX361Jx851ndc3bnn0u1d/LBbq54ua7ldWthq4qjFhbzi8vF6YLrM3NGL0eQBTm+xWdz1ClDBdZm1vak4qvRHqWR/T8xeKou0tkLS696jYsrEBKwiV0vRLFUXd3DUa5cBfmF1GiB9TMqFmBkqZ1mODVR5P6kvv0jHS9fa5vec6QicVP3HY3992+35TxQ7jW5wxx92yjfc7QXV3+oks+Vemfq6z5qtvR7LruE7x1U8rNv5GulKWZJaQWXsXHmI91lchLh3CBNd38PiFdKnsfGugGeCS6m997pHsIVrjifGlufr8i3YOw6DZporrAUu5hWHDb7FRcZA039g71C/gq6CaF7D5H1uzvwX54X/W1VnZFTTZcJ7/3S27aYJrrJmQ3fjzu2XfKjQ81gWzu2Y8Z4TpkhYus4bpk0RWs2V+HLLgNa7guWe62rOo6HWRw37as1l+37Oxpx6quY1b+54DsHjMeqRtP47qeQBb3+Cy6E7DgHv3cCncSFvo7BTtbT8NO9f9U5/EfXpqBTviwvxoAAAAASUVORK5CYII=' 
  },
  {
    company: 'Zs6',
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABeCAMAAAAuRHtGAAAAwFBMVEX////BxceXo63rcQCHio2yVwCLSACSn6nv8PDd4OO9wsTByM7Q09R8gIPy8/P19vbl5ebqagDqYwDrchjzspH40cGut77t5uLz6OKIPgCJQwC+n4+rQgDXxr/Bf1+jdl+DNgC0XRiuTADQZQCnqqyRlJfvlGa1t7mbnaDbagC2hnDtfkvui1rpWwClg3VxdXmGlKCLVTWITiu/rKLKUwCMTSXajGbQZhjaYgDhq5DLXADDmoi4jXv2xa/0uJ799fD31emAAAAEVUlEQVRoge3aeXebOBAAcGPjcBgZkm53N+6xKYZC3HRz9G7T9vt/q9WMOHSMMHm1zL6Xzl/YlvkhMRoB9mz2/4x0Gjb7cxo2mMTNgkncLJjPJ3BDzk7gInt8N7yZT+Gm2Nvju+FjclPS/emajVak+8Yxm92Q7tVbx2wQUO7V6Zlb9mZOuVenC6cu1GTC5axTF1jCBdalG6FmuMg6dBtMdwXr0I1o98nit9vHmg65SRIXdV0XVUKZEeUG/5JuFvbfu2ZU+H2Dmr8Swa6LcKZGdEO6t/9QblZJbrtTNcrm47RQP2eVNsIB5d6eU24Wx4P9ldy0hFfML/k4lz5ul6HMzin3drMh3Cz2JDf09EhKvvtafFqilIizHSbiKEKJpdzbzQnhclZ2zYj6fXtMG1n+BotllnA5S7jADropsM2+dZZ/XWMNd37HWdNFdtCtYCzFZtJv9oelsoaLrOEKdsjNoI9Zcwi+NKp6rEj3r/MTyk28fW7Nu1j02+0huHYhk/x2LOEYjuOuIam6cgj9jR7gviPd9yPcop+6Mzy/fmVpSbh3zyh3+3y/C0WzLwsin21PKgz37oJyt8sRrq8lMFO6P+x+2JwT7nY5wq2kBQEjBrikG2vuh80J4XJ2vxsyI49KXIOKNdFadaFcyO5HdIHd75bS1G2jxtWJlZ5BKy5WKcndvgYX2b2uR2ZRLNZfxmqNll1RHHt3uwD303KMGypTV3q/YC1dyCdBcl9cnCju5QLdV6Pcwpq7odde6rC6l+0uZ8e7iTp1dTouG7loz4TVBXa8WxpLrU5XvqCzQfcC2cXHkS6sumyIbcekGxWL+xnZry/HuZk5dcnAi4JywP37VBTHkW5NTF1rl0XWD7h83o5zcepSRcmMLu3tLpSLUW4KnfBGsaKYprT7BV2sUr2b76xuPbDsGNFmlul+/gNcURw7N9/FNjdiQ9dRepRNY8O9PAX361Jx851ndc3bnn0u1d/LBbq54ua7ldWthq4qjFhbzi8vF6YLrM3NGL0eQBTm+xWdz1ClDBdZm1vak4qvRHqWR/T8xeKou0tkLS696jYsrEBKwiV0vRLFUXd3DUa5cBfmF1GiB9TMqFmBkqZ1mODVR5P6kvv0jHS9fa5vec6QicVP3HY3992+35TxQ7jW5wxx92yjfc7QXV3+oks+Vemfq6z5qtvR7LruE7x1U8rNv5GulKWZJaQWXsXHmI91lchLh3CBNd38PiFdKnsfGugGeCS6m997pHsIVrjifGlufr8i3YOw6DZporrAUu5hWHDb7FRcZA039g71C/gq6CaF7D5H1uzvwX54X/W1VnZFTTZcJ7/3S27aYJrrJmQ3fjzu2XfKjQ81gWzu2Y8Z4TpkhYus4bpk0RWs2V+HLLgNa7guWe62rOo6HWRw37as1l+37Oxpx6quY1b+54DsHjMeqRtP47qeQBb3+Cy6E7DgHv3cCncSFvo7BTtbT8NO9f9U5/EfXpqBTviwvxoAAAAASUVORK5CYII=' 
  },
  ])
  

    return(
      <div className={styles.mainContainer}>
            <div className={styles.group3602}>
            <h2>
              Recruiters
            </h2>
            <p>
              MORE THAN 30 COMPANIES VISIT IET-DAVV EVERY YEAR
            </p>

        </div>
        <div className={styles.slider}>
        <Slider {...settings}>
           {recruiters.map((company)=>{
             return<div className={styles.container} key={company.company} >
              <div className={styles.img}>
              <Image
      alt="Company"
      src={company.src}
      width={100}
      height={100}
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
              </div>
              
            </div>
      }) }
         
        </Slider>
        </div>
      </div>
    );
  
}

export default Recruiters;