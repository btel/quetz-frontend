# jupyterlab-app-template

This project is bootstrapped from [JupyterLab app template](https://github.com/jtpio/jupyterlab-app-template) 🚀

## Getting started
Clone the repo with the following command to retrieve the source:
```bash
git clone https://github.com/mamba-org/quetz-frontend
cd quetz-frontend/
```

Then:
```bash
# create a new environment
mamba create -n quetz -c conda-forge/label/jupyterlab_server_rc -c conda-forge nodejs yarn python jupyterlab_server=2 -y
conda activate quetz

# install the dependencies
yarn

# build the app
yarn run build

# run the app
python main.py
```

There is also a watch command to automatically rebuild the application when there are new changes:

```bash
yarn run watch
```

## Contributing

If you think there should be other defaults as part of this template, please open a new [issue](https://github.com/jtpio/jupyterlab-app-template/issues) or [pull request](https://github.com/jtpio/jupyterlab-app-template/pulls)!
