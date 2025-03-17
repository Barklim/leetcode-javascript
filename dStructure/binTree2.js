class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	add(value) {
		const newNode = new TreeNode(value)
		if (!this.root) {
			this.root = newNode;
			return;
		}

		let currentNode = this.root;

		while(currentNode) {
			if (newNode.value < currentNode.value) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					return;
				}

				currentNode = currentNode.left
			} else {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return;
				}

				currentNode = currentNode.right
			}
			
		}
	}

	preOrder(node, callback) {
		if (!node) {
			return;
		}

		if (callback) {
			callback(node)
		}

		this.preOrder(node.left, callback);
		this.preOrder(node.right, callback);
	}

	inOrder(node, callback) {
		if (!node) {
			return;
		}

		this.inOrder(node.left, callback);
		if (callback) {
			callback(node)
		}
		this.inOrder(node.right, callback);
	}

	postOrder(node, callback) {
		if (!node) {
			return;
		}

		this.postOrder(node.left, callback);
		this.postOrder(node.right, callback);
		if (callback) {
			callback(node)
		}
	}

	traverseDFS(callback, method) {
		if (method === 'preOrder') {
			return this.preOrder(this.root, callback);
		}

		if (method === 'inOrder') {
			return this.inOrder(this.root, callback);
		}

		if (method === 'postOrder') {
			return this.postOrder(this.root, callback);
		}

	}

	traverseBFS(callback) {
		const queue = [this.root];

		while(queue.length) {
			const node = queue.shift();
			callback(node);

			if (node.left) {
				queue.push(node.left);
			}

			if (node.right) {
				queue.push(node.right);
			}
		}
	}

	search(value) {
		let currentNode = this.root;
		while (currentNode) {
			if (value === currentNode.value) {
				return currentNode;
			}
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		return null;
	}

    print(root = this.root) {
        if (!root) return true
        console.log(root.value)
        this.print(root.left)
        this.print(root.right)
    }
}

function createTreeFromArray(arr) {
    if (!arr.length || arr[0] === null) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let current = queue.shift(); // Берем текущий узел

        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

const myTree = new BinaryTree()
myTree.add(8);
myTree.add(7);
myTree.add(9);
myTree.add(5);
myTree.add(10);
myTree.add(20);
myTree.add(6);
myTree.add(2);
myTree.add(11);

/*
			8
		7		9
	5				10
2		6				20
					11
*/
var myTreeStringify = JSON.stringify(myTree, null, 2);

// myTree.traverseDFS((node) => {
// 	console.log(node.value)
// }, 'preOrder')
// 8 7 5 2 6 9 10 20 11

// myTree.traverseDFS((node) => {
// 	console.log(node.value)
// }, 'inOrder')
// 2 5 6 7 8 9 10 11 20

// myTree.traverseDFS((node) => {
// 	console.log(node.value)
// }, 'postOrder')
// 2 6 5 7 11 20 10 9 8

// myTree.traverseBFS((node) => {
// 	console.log(node.value)
// })
// 8 7 9 5 10 2 6 20 11

const foundNode = myTree.search(10);

const myTree2 = new BinaryTree();
const treeFromArray = createTreeFromArray([3,9,20,null,null,15,7]);
var myTreeStringify2 = JSON.stringify(treeFromArray, null, 2);

// const myTree3 = new BinaryTree();
// [3,9,20,null,null,15,7].forEach(value => myTree3.add(value))
// var myTreeStringify3 = JSON.stringify(myTree3, null, 2);

console.log('!!! myTree');
// console.log(myTree);
// console.log(myTree.print());
// console.log(myTreeStringify);
// console.log(foundNode);
console.log(myTreeStringify2);
// console.log(myTreeStringify3);
console.log('!!!');
