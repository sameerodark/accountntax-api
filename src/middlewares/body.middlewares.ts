const validateResourceMW = (resourceSchema) => async (req, res, next) => {
  const resource = req.body;
  try {
    // throws an error if not valid
    await resourceSchema.validate(resource);
    next();
  } catch (e) {
    // console.error(e);

    res.status(200).json({
      status: 400,
      success: false,
      result: { data: null },
      msg: e.errors.join(', '),
    });

    // res.status(400).json({ error: e.errors.join(', ') });
  }
};

export default validateResourceMW;