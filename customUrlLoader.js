const customUrlLoader = stage => {
  const exclude = [/\.svg$/, /\.js$/, /\.html$/, /\.json$/];
  if (stage === 'node') {
    return {
      exclude,
      loader: 'url-loader'
      // Don't generate extra files during node build
    };
  }
  return {
    exclude,
    loader: 'url-loader',
    query: {
      limit: 10000,
      name: 'static/[name].[hash:8].[ext]'
    }
  };
};

export default customUrlLoader;
