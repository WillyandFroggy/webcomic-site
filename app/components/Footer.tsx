function Footer() {
  const currentYear : number = new Date().getFullYear();

  return (
    <footer>
        <ul>
          <li><a href="mailto:willyandfroggy@gmail.com">Contact</a></li>
          <li><a href="https://www.webtoons.com/en/creator/WillyandFroggy">Webtoon</a></li>
          <li><a href="https://www.instagram.com/willyandfroggy/">Instagram</a></li>
          <li><a href="https://github.com/WillyandFroggy/">GitHub</a></li>
        </ul>
        <ul>
          <li id="footer-copyright">All Content &#169; 2017- { currentYear } Amari &#268;ertkus</li>
        </ul>
    </footer>
  );
}

export default Footer;