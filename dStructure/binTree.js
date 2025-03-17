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
        let current = queue.shift();

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

const myTree = new BinaryTree();
const treeFromArray = createTreeFromArray([3,9,20,null,null,15,7]);
var myTreeStringify = JSON.stringify(treeFromArray, null, 2);

const foundNode = myTree.search(10);

console.log('!!! myTree');
// console.log(myTree);
// console.log(myTree.print());
console.log(myTreeStringify);
// console.log(foundNode);
console.log('!!!');
